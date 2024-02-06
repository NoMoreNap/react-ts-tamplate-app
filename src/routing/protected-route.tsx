import { Navigate, Outlet } from 'react-router-dom'
import Cookies from "js-cookie";
import { WBApi } from '../api/https';


export const ProtectedRoute = ({ redirectPath = '/sing-in' }) => {
    try {
        const user = Cookies.get(WBApi.localTokenName)
        if (!user) {
            return <Navigate to={redirectPath} replace={true} />
        }
    } catch (e) {
        return <Navigate to={redirectPath} replace={true}/>
    }
    return <Outlet />
}