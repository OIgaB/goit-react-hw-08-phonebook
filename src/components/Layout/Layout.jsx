import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { setToken, fetchCurrentUserThunk, logoutThunk } from '../../redux/authOperations';


export const Layout = () => {

    const { token, user } = useSelector((state) => state.auth); 
    const dispatch = useDispatch();   

    useEffect(() => {
        if(token && !user) { //якщо токен є, а юзера вже ні
            setToken(token)
            dispatch(fetchCurrentUserThunk()).unwrap().catch(() => dispatch(logoutThunk())) // ловимо помилку
        }
    }, [token, dispatch, user])

	return (
		<div>
			<Header />
			<Suspense fallback={<p>Downloading...</p>}>
				<Outlet />
			</Suspense>
		</div>
	)
}