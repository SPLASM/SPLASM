import React from 'react';
import { Link } from 'react-router-dom';

const AppRoutes = () => (
  <header className="col-xs-12">
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/users/username'>Profile</Link></li>
        <li>Logout</li>
      </ul>
    </nav>
  </header>
);

export default AppRoutes;
