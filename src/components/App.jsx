import { Suspense, lazy, useEffect, useMemo } from "react";
import { Switch } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "../redux/selectors";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AppBar } from "./AppBar/AppBar";
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { fetchContacts } from "../redux/operations";
import { Container, Title, SubTitle, AlertMessage } from "./styled";

const HomePage = lazy(() => import('../pages/HomePage'));


export const App = () => {
  const { items: contacts, loading, error } = useSelector(getContacts); // items - масив об'єктів зі стору
  const filter = useSelector(getFilter); // рядок зі стору

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchContacts()) // при першому рендері викликає ф-цію запиту на бекенд за контактами
  }, [dispatch]); //useEffect не знає що таке dispatch/чи він здатен змінитися і про всяк випадок просить його в залежність

  
// Функція, яка шукає співпадіння введеного в фільтр імені з іменами об'єктів масиву, який в state
// повертає новий масив знайдених об'єктів (якщо фільтр в state пустий, то новий масив контактів не створиться, 
// а з ф-ції повернеться масив контактів, що в state)

  const filteredContacts = useMemo(() => { // для важких обчислень/фільтрацій, щоб не було перерендеру
      return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())) 
  }, [contacts, filter]);
  

  return (
    <Container>
      <AppBar/>
      <Switch>
        <Suspense fallback={<p>Downloading...</p>}>
          <PublicRoute exact path="/">
            <Title>Phonebook</Title>
            <HomePage/>
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterPage/>
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo='/contacts' restricted>
            <LoginPage/>
          </PublicRoute>

          <PrivateRoute path='/contacts' redirectTo='/login'>
            <ContactForm /> 
            <SubTitle>Contacts</SubTitle>
            <Filter />

            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>} 
            {filteredContacts.length !== 0 && <ContactList />}
            {filteredContacts.length === 0 && <AlertMessage>There is no contact matching your request.</AlertMessage>} 
          </PrivateRoute>
      </Suspense>
      </Switch>
    </Container>
  );
}