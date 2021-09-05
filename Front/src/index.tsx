import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from "./MainRouter.js";
import { BrowserRouter } from "react-router-dom";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
