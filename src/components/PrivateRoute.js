import { useSelector } from "react-redux"
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ children, redirectTo='/', ...routeProps }) => {
    const isLoggedIn = useSelector(); 
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>
    );
}