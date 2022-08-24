import { lazy, Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import ResponsiveAppBar from './AppBar/AppBar';
import Loader from './Loader';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

import { GlobalStyle } from './GlobalStyled';
import { Phonebook } from './App.styled';

const HomePage = lazy(() =>
  import('views/HomeView/HomeView' /* webpackChunkName: 'HomeView' */)
);
const Contacts = lazy(() =>
  import('views/Contacts/Contacts' /* webpackChunkName: 'Contacts' */)
);
const SignUp = lazy(() =>
  import(
    'views/RegisterView/RegisterView' /* webpackChunkName: 'RegisterView' */
  )
);
const SignInSide = lazy(() =>
  import('views/LoginView/LoginView' /* webpackChunkName: 'LoginView' */)
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(authSelectors.getIsFetchCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      <Phonebook>
        {!isFetchCurrentUser && (
          <Routes>
            <Route path="/" element={<ResponsiveAppBar />}>
              <Route index path="/home" element={<HomePage />} />
              <Route
                path="/login"
                element={
                  <PublicRoute path="/contacts">
                    <SignInSide />
                  </PublicRoute>
                }
              />
              <Route
                path="/signUp"
                element={
                  <PublicRoute path="/home">
                    <SignUp />
                  </PublicRoute>
                }
              />
              <Route
                path="/Contacts"
                element={
                  <PrivateRoute path="/login">{<Contacts />}</PrivateRoute>
                }
              ></Route>
            </Route>
          </Routes>
        )}
        <Toaster />
      </Phonebook>
    </Suspense>
  );
}
