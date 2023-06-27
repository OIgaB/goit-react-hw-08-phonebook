import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { loginThunk } from '../redux/operations';
import { toast } from 'react-hot-toast'

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

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
    // або      name === 'email' ? setEmail(value) : setPassword(value)
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try{
      await dispatch(loginThunk({ email, password })).unwrap();
      toast.success('Wellcome!')
      setEmail('');
      setPassword('');

    } catch(error) {
      toast.error('Error Login')
    }
  };

  return (
    <div>
      <h1>Welcome back! Stay connected by logging into your phonebook app account.</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
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

        <button 
          type="submit"
          disabled={!email || !password}
        >
            Log in
        </button>
        <Link to='/register'>Sign Up</Link>
      </form>
    </div>
  );
}