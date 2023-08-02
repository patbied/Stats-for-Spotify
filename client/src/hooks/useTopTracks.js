import axios from "axios"
import {useQuery}from "@tanstack/react-query"
import useAuth from "../context/useAuth"
export const useTopTracks = ({time_range,limit,typeReq}) => {
    const {auth} = useAuth()
    return useQuery({
        queryKey: [time_range,'top tracks',typeReq],
        queryFn: async() => {
            const {data} = await axios.get('/api/get-top',{
                params: {
                    time_range,
                    limit,
                    typeReq
                }
            })
            // console.log(data)
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

