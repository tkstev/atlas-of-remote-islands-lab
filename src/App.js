import React from 'react';
import './App.css';
import Card from './Card.js';
import data from './atlas-of-remote-islands.js';

const App = () => {
  const component = new React.Component()
  
  component.render = () => {
    console.log(data);
    
    return (
      <div>
        <div className="container">
          <h1 className="section-title">Atlas of Remote Islands</h1>
        </div>
        
        <div className="container">
          <h2 className="section-title">Islands</h2>
          <ul className="cards">
            
            <Card />
            
          </ul>
        </div>
      </div>
    );
  }
  
  return component
}

export default App;
