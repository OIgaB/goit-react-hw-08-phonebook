import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';


const styles = {
    link: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      color: '#2A363B',
    },
    // activeLink: {
    //   color: '#E84A5F',
    // },
  };

export const Header = () => {  
    const { access_token : isAuth } = useSelector((state) => state.auth);  

    return (
        <header>
            <nav>
                <NavLink to="/" style={styles.link} >
                    Phonebook
                </NavLink>
                {/* activeStyle={styles.activeLink} */}
                <NavLink to="/contacts" style={styles.link} >
                    Contacts
                </NavLink>
                {/* activeStyle={styles.activeLink} */}
                {isAuth ? <UserMenu/> : <AuthNav/>}
            </nav>
        </header>
    );
}