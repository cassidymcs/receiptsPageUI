import React from 'react';
import Appbar from './components/Navigation';
import ReceiptView from './components/ReceiptView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <ReceiptView/>
    </div>
  );
}

export default App;
