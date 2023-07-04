import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom';
// import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from "redux/selectors";


const PrivateRoute = ({ children: ContactsPage }) => { // children - це ContactsPage 
    // const location = useLocation();    
    const { isLoggedIn, isRefreshing } = useSelector(getAuth); 
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to='/login' /> : ContactsPage;  //state={{ location }} //якщо токен є, побачиш контакти, а якщо немає - повернешся на логін/реєстрацію
}

export default PrivateRoute;