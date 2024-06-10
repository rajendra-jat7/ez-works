import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <div className="App-left">
        <header className="App-header">
          <h1>EZ Works</h1>
          <h2>Suite Of Business Support Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
        </header>
        <ContactForm />
      </div>
      <div className="App-right">
        <Services />
      </div>
    </div>
  );
}

export default App;
