import { useSelector } from "react-redux"
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from "redux/selectors";

export const PublicRoute = ({ children, restricted = false, redirectTo='/', ...routeProps }) => {
    const isLoggedIn = useSelector(getIsLoggedIn); 
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
}