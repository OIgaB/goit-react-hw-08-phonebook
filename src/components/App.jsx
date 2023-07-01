// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import { Suspense } from 'react'

import { Layout } from './Layout/Layout';
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
// import { fetchContacts } from "../redux/operations";
import { Container } from "./styled";

// Відкладені імпорти. Сторінка не завантажиться, якщо її не відвідати
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import ('../pages/LoginPage'));
const ContactsPage = lazy(() => import ('../pages/ContactsPage'));


export const App = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(fetchContacts()) // при першому рендері викликає ф-цію запиту на бекенд за контактами
  // }, [dispatch]); //useEffect не знає що таке dispatch/чи він здатен змінитися і про всяк випадок просить його в залежність

  return (
    <Container>
      <Toaster />
      <Routes>  
        <Route path='/' element={<Layout/>}>    {/* Header і Outlet (children) */}
            <Route index element={<HomePage/>} />
            <Route
                path='/contacts'
                element={
                    <PrivateRoute>
                      <ContactsPage />
                    </PrivateRoute>                     
                }
            />  
        </Route>       
          <Route path="/register"  // restricted  
              element={
                <Suspense fallback={<p>Downloading...</p>}>
                <PublicRoute >
                    <RegisterPage />
                </PublicRoute> 
                </Suspense>
              }
          />
        <Route path="/login" // restricted
          element={
            <Suspense fallback={<p>Downloading...</p>}>
            <PublicRoute >
                <LoginPage />
            </PublicRoute> 
            </Suspense>
          }
        />

      </Routes>
    </Container>
  );
}