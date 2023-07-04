import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';
import { Container, Text } from './styled';

const RegisterPage = () => {
  return (
    <Container>
      <Text>Join our phonebook app community <br/> and unlock the power of seamless contact management by signing up now!</Text>
      <RegistrationForm/>
    </Container>
  );
}

export default RegisterPage;