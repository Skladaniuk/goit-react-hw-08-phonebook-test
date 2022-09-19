import {lazy, Suspense} from 'react'
import {Routes, Route} from 'react-router-dom';
import {ContactsView} from '../Views/ContactsView'
import MenuAppBar from './AppBar/AppBar'
// import {RegisterView} from '../Views/RegisterView'
// import { LoginView } from '../Views/LoginView';
// import { HomeView } from '../Views/HomeView';
import { useDispatch } from 'react-redux';
import {authOperations} from '../redux/auth/auth-operations'
import { useEffect } from 'react';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';


const  RegisterView = lazy(() => import('../Views/RegisterView'))
const LoginView = lazy(() => import('../Views/LoginView'))
const HomeView = lazy(() => import('../Views/HomeView'))


export default function App () {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])

  return (
    <div>
      <MenuAppBar/>
<Suspense fallback ={<h1>Loading</h1>}>
  <Routes>

    <Route element = {<PublicRoute restricted/>}>
      <Route path = '/' element ={<HomeView/>} />
    </Route>

    <Route element = {<PublicRoute restricted/>}>
    <Route path ='/register' element ={<RegisterView/>}/> 
      </Route>

 <Route element ={<PublicRoute restricted />}>
 <Route path = '/login' element ={<LoginView/>}/>
 </Route>
 
<Route element ={<PrivateRoute/>}> 
<Route path = '/contacts' element={<ContactsView/>} />
</Route>

  </Routes>
  </Suspense>
  </div>
    )
   

  }