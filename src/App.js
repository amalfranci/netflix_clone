import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
import {action,originals,Horror, comedy} from './urls'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
    
        
        <Navbar />
        <Banner />
        <Rowpost url={originals} title="Netflix Originals" />
        <Rowpost url={action} title="Action" isSmall />
        <Rowpost url={Horror} title="Horror" isSmall />
        <Rowpost url={comedy} title="Comedy" isSmall />
        
       
      
       
      </header>
    </div>
  );
}

export default App;
