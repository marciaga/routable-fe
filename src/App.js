import React from 'react';
import { Provider } from 'react-redux'

import './App.css';

import { Routes } from './routes';
import { Navbar } from './components/navigationBar';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Navbar />
      </Routes>
    </Provider>
  );
}

export default App;
