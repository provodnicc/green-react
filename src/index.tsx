import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/Raleway-Regular.ttf';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import { YandexOauth } from './components/YandexOauth/YandexOauth';
import { SignIn } from './components/SignIn/SignIn';
import { History } from './components/history/history';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/yandex/callback",
    element: <YandexOauth/>  
  },
  {
    path: '/sign-in',
    element: <SignIn/>
  },
  {
    path: '/history',
    element: <History/>
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
