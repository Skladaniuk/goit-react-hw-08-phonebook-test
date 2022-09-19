import {UserMenu} from '../UserMenu/UserMenu'
import {AuthNav} from '../AuthNav/AuthNav'
import css from './AppBar.module.css'
import {useSelector} from 'react-redux'
import authSelectors from '../../redux/auth/auth-selectors'

export default function  AppBar  () {

    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <div className={css.app}>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </div>
    )
}
