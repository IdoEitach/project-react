import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaseSignUp from './components/baseSignUp';

function App() {
  return (
    <div className="App">
    <BaseSignUp numberOFFields={3} />
    </div>
  );
}

export default App;
