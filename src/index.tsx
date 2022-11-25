import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/Raleway-Regular.ttf';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import { YandexOauth } from './components/YandexOauth/YandexOauth';



const router = createBrowserRouter([
  {
    
    path: "/",
    element: <App/>,

    
  },
  {
    path: "/yandex/callback",
    element: <YandexOauth/>  
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
