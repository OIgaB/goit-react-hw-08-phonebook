import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Suspense, lazy } from "react";
import { Switch } from 'react-router-dom';

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AppBar } from "./AppBar/AppBar";
import { Container, Title } from "./styled";
import { fetchContacts } from "../redux/operations";

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import ('../pages/LoginPage'));
const ContactsPage = lazy(() => import ('../pages/ContactsPage'));


export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchContacts()) // при першому рендері викликає ф-цію запиту на бекенд за контактами
  }, [dispatch]); //useEffect не знає що таке dispatch/чи він здатен змінитися і про всяк випадок просить його в залежність

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
            <ContactsPage/>
          </PrivateRoute>

        </Suspense>
      </Switch>
    </Container>
  );
}