import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"
import Cards from "./components/Cards.js"
import data from "./data.js"

function App() {
  const cardData = data.map(item => {
    return (
      <Cards 
      key={item.id}
      item={item}
       />
    )
  })
  return (
    <div className="App">
    <Navbar />
    {cardData}
    </div>
  );
}

export default App;
