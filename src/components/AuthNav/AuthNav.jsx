import {NavLink} from 'react-router-dom';
import css from './AuthNav.module.css'

export const AuthNav = () =>{

return (
    <div className={css.authNav}>
        <NavLink   className={({ isActive }) =>
                `${css.link}` + (isActive ? ` ${css.activeLink}` : '') } to ='/register' >Register</NavLink>
        <NavLink   className={({ isActive }) =>
        `${css.link}` + (isActive ? ` ${css.activeLink}` : '')}  to= '/login'>LogIn</NavLink>
    </div>
)

} 