import { useSelector } from "react-redux"
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from "redux/selectors";

export const PrivateRoute = ({ children, redirectTo='/', ...routeProps }) => {
    const isLoggedIn = useSelector(getIsLoggedIn); 
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>
    );
}