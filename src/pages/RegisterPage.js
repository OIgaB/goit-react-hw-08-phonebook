import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/authOperations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    // signUp({ name, email, password }).then(() => {
    //   toast.success('Sign up successfully!')
    //   navigate('/login');
    // })
    await dispatch(signUpThunk({ name, email, password })).unwrap();
    toast.success('Sign up successfully!')
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Join our phonebook app community today and unlock the power of seamless contact management by signing up now!</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default RegisterPage;