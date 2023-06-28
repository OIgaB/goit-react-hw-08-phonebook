import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logOut } from "../../redux/authSlice";
import { dellToken } from '../../services/auth-api';
import { getAuth } from "../../redux/selectors";


export const UserMenu = () => {       
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { access_token: isAuth, profile } = useSelector(getAuth);

    const handleLogOut = () => {
        dispatch(logOut());
        dellToken();
    }

    return (
        <div>
            <p>mango@mail.com</p>
            {profile && <h4>{profile.name}</h4>}
            <button type="button" onClick={() => isAuth ? handleLogOut() : navigate('/login')}>
                {isAuth ? 'Logout' : 'Login'}
            </button>
        </div> 
    );
}