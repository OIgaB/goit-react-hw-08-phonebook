import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { setToken } from '../../services/auth-api';
// import { getProfileThunk } from '../../redux/operations';
// import { logOut } from '../../redux/authSlice';


export const Layout = () => {

    const { token, profile } = useSelector((state) => state.auth); 
    const dispatch = useDispatch();   

    useEffect(() => {
        if(token && !profile) {
            setToken(token)
            // dispatch(getProfileThunk()).unwrap().catch(() => dispatch(logOut()))
        }
    }, [token, dispatch, profile])

	return (
		<div>
			<Header />
			<Suspense fallback={<p>Downloading...</p>}>
				<Outlet />
			</Suspense>
		</div>
	)
}