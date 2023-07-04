import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/authOperations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Button } from '../ContactList/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export const RegistrationForm = () => {    //   Форма - бібл. MUI
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
    try {
      await dispatch(signUpThunk({ name, email, password })).unwrap();
      toast.success('You have been signed up successfully!')
      navigate('/login'); 
      setName('');
      setEmail('');
      setPassword('');
    } catch {
      toast.error('We already have a user with this data in our records.')
    }
  };

//   Альтернатива без handleChange і useState:
//   const handleSubmit = async event => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     try{
//       await dispatch(signUpThunk({ 
//          name: form.elements.name.value,
//          email: form.elements.email.value,
//          password: form.elements.password.value,
//     })).unwrap();
//       toast.success(`You have been signed up successfully!`)
//     form.reset();
//     } catch(error) {
//       toast.error('We already have a user with this data in our records.')
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
                    label="Name"
                    type="name"
                    name="name"
                    value={name}
                    id="name"
                    size="medium"
                    autoComplete="name"
                    color='warning' 
                    onChange={handleChange}
                    required
                    sx={{
                      // border: '1px solid green',      // - працює 
                      // transition: 'color 2050ms cubic-bezier(0.4, 0, 0.2, 1)',  // - не працює 
                    }}
        />
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
                    label="Password" 
                    type="password"
                    name="password"
                    value={password}
                    id="password" 
                    autoComplete="password"
                    color='warning' 
                    onChange={handleChange}
                    required
        />
        <Button 
          type="submit"
          disabled={!name || !email || !password}
        >
          Sign up
        </Button>
      </Box>
  );
}