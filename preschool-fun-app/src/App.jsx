import React from 'react';
import TracingCanvas from './components/TracingCanvas';
import './App.css'; 

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Exersează scrisul !</h1>
      </header>
      <TracingCanvas />
    </div>
  );
}

export default App;

