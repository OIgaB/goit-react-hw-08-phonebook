import React from 'react';
import { Wrapper, Title, Text, Image } from './styled';
import phonebookImg from '../services/phonebook.jpg';


const HomePage = () => (
  <Wrapper>
    <Title>Phonebook</Title> 
    <Text>
      Welcome to the phonebook app, your ultimate solution for contact management. 
      <br/> Sign up, log in, and effortlessly create and delete contacts, while enjoying the convenience of making calls within the app. 
      <br/> Experience seamless connectivity and stay organized with ease. 
      {/* <span role="img" aria-label="phone">☎️</span> */}
    </Text>
    <Image src={phonebookImg} alt="Phonebook"/>
  </Wrapper>
);

export default HomePage;