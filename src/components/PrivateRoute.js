import { useSelector } from "react-redux"
import { Route, Navigate, useLocation } from 'react-router-dom';
import { getAuth } from "redux/selectors";

export const PrivateRoute = ({ children, ...routeProps }) => {
    const isAuth = useSelector(getAuth); 
    const location = useLocation();

    return (
        <Route {...routeProps}>
            {isAuth ? children : <Navigate to={location} />}
        </Route>
    );
}