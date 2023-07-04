import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'

import { Layout } from './Layout/Layout';
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import {fetchCurrentUserThunk } from "../redux/authOperations";
import { Container } from "./styled";

// Відкладені імпорти. Сторінка не завантажиться, якщо її не відвідати
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import ('../pages/LoginPage'));
const ContactsPage = lazy(() => import ('../pages/ContactsPage'));


export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCurrentUserThunk()) // при першому рендері записує в заголовок токен зі стейту і викликає ф-цію запиту на бекенд за даними про юзера
  }, [dispatch]); //useEffect не знає що таке dispatch/чи він здатен змінитися і про всяк випадок просить його в залежність

  return (
    <Container>
      <Toaster />
      <Routes>  
        <Route path='/' element={<Layout/>}>    {/* Header і Outlet (children) */}
            <Route index element={<HomePage/>} />
            <Route path='/contacts' element={<PrivateRoute><ContactsPage /></PrivateRoute>} />       
            <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
        </Route>  
      </Routes>
    </Container>
  );
}