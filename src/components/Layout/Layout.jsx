import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { getProfileThunk } from '../../redux/operations';
import { setToken } from '../../services/auth-api';
import { logOut } from '../../redux/authSlice';


export const Layout = () => {

    const { access_token : isAuth, profile } = useSelector((state) => state.auth);  
    const dispatch = useDispatch();   

    useEffect(() => {
        if(isAuth && !profile) {
            setToken(isAuth)
            dispatch(getProfileThunk()).unwrap().catch(() => dispatch(logOut()))
        }
    }, [isAuth, dispatch, profile])

	return (
		<div>
			<Header />
			<Suspense fallback={<p>Downloading...</p>}>
				<Outlet />
			</Suspense>
		</div>
	)
}