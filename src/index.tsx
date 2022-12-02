import React from 'react';
import ReactDOM from 'react-dom/client';
import { HistoryWalletPage } from './pages/HistoryWalletPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//COMPONENTS
import './fonts/fonts.css';
import './index.css';
import { YandexOauth } from './pages/YandexOauth';
import { SignInPage } from './pages/SignInPage';
import { CreditCalcPage } from './pages/CreditPage';
import { Routes } from './enums/routes';
import { WalletPage } from './pages/WalletPage';
import { DepositPage } from './pages/DepositPage';
import { HomePage } from './pages/HomePage';
import { HistoryDepositPage } from './pages/HistoryDepositPage';
import { HistoryCreditPage } from './pages/HistoryCreditPage';
const router = createBrowserRouter([
  {
    path: Routes.HomeLink,
    element: <HomePage/>,
  },
  {
    path: Routes.YandexOauthLink,
    element: <YandexOauth/>  
  },
  {
    path: Routes.SignInLink,
    element: <SignInPage/>
  },
  {
    path: Routes.HistoryWalletLink,
    element: <HistoryWalletPage/>  
  },
  {
    path: Routes.HistoryDepositLink,
    element: <HistoryDepositPage/>  
  },
  {
    path: Routes.HistoryCreditLink,
    element: <HistoryCreditPage/>  
  },
  {
    path: Routes.CreditLink,
    element: <CreditCalcPage/>
  },
  {
    path: Routes.WalletLink,
    element: <WalletPage/>
  },
  {
    path: Routes.DepositLink,
    element: <DepositPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
