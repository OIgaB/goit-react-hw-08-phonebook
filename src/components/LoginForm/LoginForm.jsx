import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/authOperations';
import { toast } from 'react-hot-toast';
import { Button } from '../ContactList/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export const LoginForm = () => {   //     Форма - бібл. MUI 
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
      toast.success(`Welcome!`)
      setEmail('');
      setPassword('');
    } catch(error) {
      toast.error('Login error. Try again.')
    }
  };

//   Альтернатива без handleChange і useState:
//   const handleSubmit = async event => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     try{
//       await dispatch(loginThunk({ 
//          email: form.elements.email.value,
//          password: form.elements.password.value,
//     })).unwrap();
//       toast.success(`Welcome!`)
//     form.reset();
//     } catch(error) {
//       toast.error('Login error. Try again.')
//     }
//   };

  return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch'},
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField 
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    autoComplete="email"
                    color='warning' 
                    onChange={handleChange}
                    required
        />
        <TextField                   
                    label="password" 
                    type="password"
                    name="password"
                    value={password}
                    id="password" 
                    autoComplete="password"
                    color='warning' 
                    // pattern: '[0-9]*'
                    onChange={handleChange}
                    required
        />
        <Button 
          type="submit"
          disabled={!email || !password}
        >
            Log in
        </Button>
      </Box>
  );
}
