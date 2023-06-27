import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { getIsLoggedIn } from 'redux/selectors';


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
    const isLoggedIn = useSelector(getIsLoggedIn);     

    return (
        <header>
            <nav>
                <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
                    Phonebook
                </NavLink>
                <NavLink to="/contacts" exact style={styles.link} activeStyle={styles.activeLink}>
                    Contacts
                </NavLink>
                {isLoggedIn ? <UserMenu/> : <AuthNav/>}
            </nav>
        </header>
    );
}