import { Suspense, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
// import { setToken } from '../../services/auth-api';
// import { fetchCurrentUserThunk } from '../../redux/authOperations';
// import { logoutThunk } from '../../redux/authOperations';


export const Layout = () => {

    // const { token, profile } = useSelector((state) => state.auth); 
    // const dispatch = useDispatch();   

    // useEffect(() => {
    //     if(token && !profile) { //якщо токен є, але він вже не валідний (термін дії завершився), треба зловити помилку
    //         setToken(token)
    //         dispatch(fetchCurrentUserThunk()).unwrap().catch(() => dispatch(logoutThunk()))
    //     }
    // }, [token, dispatch, profile])

	return (
		<div>
			<Header />
			<Suspense fallback={<p>Downloading...</p>}>
				<Outlet />
			</Suspense>
		</div>
	)
}