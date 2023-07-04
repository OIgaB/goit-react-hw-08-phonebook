import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from '../../redux/authOperations';
import { getAuth } from "../../redux/selectors";
import { Container, Name } from './styled';
import { Button } from '../ContactList/styled';


export const UserMenu = () => {       
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn, user } = useSelector(getAuth);

    const handleLogOut = () => {
        dispatch(logoutThunk());   
    }

    return (
        <Container>
            {user && <Name>{user.name}</Name>}      {/* user - {name: '...', email: '...'} */}
            <Button type="button" onClick={() => isLoggedIn ? handleLogOut() : navigate('/login')}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </Button>
        </Container> 
    );
}