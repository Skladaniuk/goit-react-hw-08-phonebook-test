import css from './UserMenu.module.css'
import authSelectors from '../../redux/auth/auth-selectors'
import {useDispatch, useSelector } from 'react-redux'
import { authOperations } from 'redux/auth/auth-operations'



export const UserMenu = () => {


const dispatch = useDispatch();
const name = useSelector(authSelectors.getUsername)
return(
    <div className={css.menu}>
        <p className={css.greetings}>Добро пожаловать,{name}</p>
        <button type="button" className={css.btn} onClick ={() => dispatch(authOperations.logOut())}> Logout</button>

   </div>)
}