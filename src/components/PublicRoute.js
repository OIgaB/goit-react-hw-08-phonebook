import { useSelector } from "react-redux"
import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from "redux/selectors";


const PublicRoute = ({ children }) => {  //restricted = false
    const { access_token: isAuth } = useSelector(getAuth); 
    const location = useLocation();
    // const shouldRedirect = isAuth && restricted;
    // shouldRedirect ? <Navigate to={location.state ?? '/'} /> : children

    return !isAuth ? children : <Navigate to={location.state ?? '/'} />
    // якщо токена немає, то побачиш форму реєстрації/логіна, а якщо є - переадресує на ту сторінку, яку хотів відвідати
}

export default PublicRoute;



	

