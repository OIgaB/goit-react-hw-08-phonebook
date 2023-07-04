
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Container, Text } from './styled';

const LoginPage = () => {
  return (
    <Container>
      <Text>Welcome back! Stay connected by logging into your phonebook app account.</Text>
      <LoginForm/>
    </Container>
  );
}

export default LoginPage;