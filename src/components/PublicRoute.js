import { useSelector } from "react-redux"
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false, redirectTo='/', ...routeProps }) => {
    const isLoggedIn = useSelector(); 
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
}