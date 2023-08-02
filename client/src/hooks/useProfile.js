import axios from "axios"
import {useQuery}from "@tanstack/react-query"
import useAuth from "../context/useAuth"
export const useProfile = () => {
    const {auth} = useAuth()
    return useQuery({
        queryKey: ['user-profile'],
        queryFn: async() => {
            const {data} = await axios.get('/api/get-profile')
            console.log(data)
            return data
        },
        onError: (err) => {
            console.log(err)
        },
        enabled:auth,
        staleTime: 300000,
        refetchOnWindowFocus: false
    })
}

