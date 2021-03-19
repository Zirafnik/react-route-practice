import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div>
      <h1>Hello from App</h1>
      <BrowserRouter>
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
      </BrowserRouter>

      <div>This is Footer</div>
    </div>
  );
}

export default App;