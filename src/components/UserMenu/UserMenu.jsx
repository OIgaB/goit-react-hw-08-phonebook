import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from '../../redux/operations';
import { getAuth } from "../../redux/selectors";


export const UserMenu = () => {       
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token, profile } = useSelector(getAuth);

    const handleLogOut = () => {
        dispatch(logoutThunk());   
    }

    return (
        <div>
            {profile && <h4>{profile.name}</h4>}      {/* profile - {name: '...', email: '...'} */}
            <button type="button" onClick={() => token ? handleLogOut() : navigate('/login')}>
                {token ? 'Logout' : 'Login'}
            </button>
        </div> 
    );
}