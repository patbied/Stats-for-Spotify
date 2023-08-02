import axios from "axios"
import {useQuery}from "@tanstack/react-query"
import useAuth from "../context/useAuth"
export const useRecentlyPlayed = () => {
    const {auth} = useAuth()
    return useQuery({
        queryKey: ['recently-played'],
        queryFn: async() => {
            const {data} = await axios.get('/api/get-recent',{
                params: {
                    limit:'10',
                }
            })
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

