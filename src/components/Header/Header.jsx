import { useSelector } from 'react-redux'
import { getAuth } from '../../redux/selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { StyledLink, StyledHeader, Container } from './styled';


export const Header = () => {   // або AppBar
    const { isLoggedIn } = useSelector(getAuth);  

    return (
        <StyledHeader>
            <nav>
                <Container>
                    <div>
                        <StyledLink to="/">Home</StyledLink>
                        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
                    </div>
                    {isLoggedIn ? <UserMenu/> : <AuthNav/>}
                </Container>
            </nav>
        </StyledHeader>
    );
}