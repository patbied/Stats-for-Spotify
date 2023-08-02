import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "../context/useAuth";

const requireAuth = () => {
    const {auth} = useAuth()
    const location = useLocation()

    return (
        auth?.access_token
        ? <Outlet/>
        : <Navigate to='/' state={{from: location}} replace/>
    )
}