import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {useQuery}from "@tanstack/react-query"
const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState()
    const [tokenError,setTokenError] = useState(false)
    const [tokenSuccess,setTokenSuccess] = useState(false)
    const getNewAccesToken = async() => {
        const {data} = await axios.get('/api/refresh_token')
        console.log(data)
    }
    const isAuthenticated = async() => {
            const {data,status} = await axios.get('/api/is-authenticated/',{
                withCredentials: true
            })
            const isAuth = data.Authenticated
            // console.log('auth',isAuth)
            if (isAuth) setAuth(true)
            else setAuth(false)
            return isAuth
        
        
        // console.log(isAuth)
        
    }
    const {data,refetch} = useQuery({
        queryKey: ['userAuthenticated'],
        queryFn: isAuthenticated,
        onError: (err) => {
            console.log("ERR",err)
            
        },
        onSuccess: (data) => {
            // console.log("SUCC",data)
        },
        refetchOnWindowFocus: false
    })
    const logout = async() => {
        const {data} = await axios.post('/api/logout',{
            withCredentials: true
        })
        const isAuth = data.Authenticated
        console.log(isAuth)
        setAuth(false)
    }

    return (
        <AuthContext.Provider value={{logout,isAuthenticated, auth, setAuth,tokenError,setTokenError,tokenSuccess,setTokenSuccess}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext