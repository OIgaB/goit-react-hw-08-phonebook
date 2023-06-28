import { useSelector } from "react-redux"
import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from "redux/selectors";


const PrivateRoute = ({ children }) => {
    const { access_token: isAuth } = useSelector(getAuth); 
    const location = useLocation();

    return isAuth ? children : <Navigate to='/login' state={{ from: location }} /> // якщо токен є, побачиш контакти, а якщо немає - повернешся на логін/реєстрацію
}

export default PrivateRoute;