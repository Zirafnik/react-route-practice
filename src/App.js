import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div>
      <h1>Hello from App</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='anotherroute'>Another</Link>
        </li>
      </ul>
      <Routes />
    </div>
  );
}

export default App;