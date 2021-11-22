import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"
import Cards from "./components/Cards.js"

  
// create a data.js with id, location, google maps, link, start date
//end date, description, image URL
// use .map() and props
//style & polish

function App() {
  return (
    <div className="App">
    <Navbar />
    <Cards />
    </div>
  );
}

export default App;
