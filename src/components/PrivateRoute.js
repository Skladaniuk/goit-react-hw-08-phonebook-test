import {Outlet, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors'

export default function PrivateRoute ({children, ...routeProps}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

return isLoggedIn ? <Outlet/> : <Navigate to = 'login'/>
}