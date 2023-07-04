// import { useRef } from "react";
import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom';
// import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from "redux/selectors";


const PublicRoute = ({ children: RegisterOrLoginPage }) => {  //children - це RegisterPage або LoginPage
    const { isLoggedIn } = useSelector(getAuth); 
    // const location = useLocation();
    // const savedLocation = useRef(location.state?.from ?? '/');
    // console.log(location.state);

    return isLoggedIn ? <Navigate to='/contacts' /> : RegisterOrLoginPage;   //{savedLocation.current} 
    // якщо ти не залогінений, то побачиш форму реєстрації/логіна, а якщо так - переадресує на ту сторінку контактів
}

export default PublicRoute;



	

