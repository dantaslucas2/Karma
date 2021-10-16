import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from "./MainRouter.js";
import { BrowserRouter } from "react-router-dom";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactNotification />
      <MainRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
