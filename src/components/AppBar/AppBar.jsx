import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useEffect } from 'react';
import { getProfileThunk } from '../../redux/operations';
import { setToken } from '../../services/auth-api';
import { logOut } from '../../redux/authSlice';


const styles = {
    link: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      color: '#2A363B',
    },
    activeLink: {
      color: '#E84A5F',
    },
  };

export const AppBar = () => {  
    const { access_token : isAuth, profile } = useSelector((state) => state.auth);  
    const dispatch = useDispatch();   

    useEffect(() => {
        if(isAuth && !profile) {
            setToken(isAuth)
            dispatch(getProfileThunk()).unwrap().catch(() => dispatch(logOut()))
        }
    }, [isAuth, dispatch, profile])

    return (
        <header>
            <nav>
                <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
                    Phonebook
                </NavLink>
                <NavLink to="/contacts" exact style={styles.link} activeStyle={styles.activeLink}>
                    Contacts
                </NavLink>
                {isAuth ? <UserMenu/> : <AuthNav/>}
            </nav>
        </header>
    );
}