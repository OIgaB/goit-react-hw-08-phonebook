import { useRef } from "react";
import { useSelector } from "react-redux"
import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from "redux/selectors";


const PublicRoute = ({ children }) => {  
    const { token } = useSelector(getAuth); 
    const location = useLocation();
    const savedLocation = useRef(location.state?.from ?? '/');

    return !token ? children : <Navigate to={savedLocation.current} />
    // якщо токена немає, то побачиш форму реєстрації/логіна, а якщо є - переадресує на ту сторінку, яку хотів відвідати
}

export default PublicRoute;



	

