import AppRoutes from './components/AppRoutes.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/style.css';
import Signup from './components/signup/Signup.jsx';
import Login from './components/login/Login.jsx';

if(window.location.pathname === '/login') {
  ReactDOM.render(<Login/>, document.getElementById('root'));
} else if (window.location.pathname === '/signup') {
	ReactDOM.render(<Signup/>, document.getElementById('root'));
} else {
  ReactDOM.render((
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    ), document.getElementById('root'));
}