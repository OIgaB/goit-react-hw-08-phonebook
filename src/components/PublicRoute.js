import { useSelector } from "react-redux"
import { Route, Navigate, useLocation } from 'react-router-dom';
import { getAuth } from "redux/selectors";

export const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
    const isAuth = useSelector(getAuth); 
    const location = useLocation();
    const shouldRedirect = isAuth && restricted;

    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Navigate to={location.state ?? '/'} /> : children}
        </Route>
    );
}