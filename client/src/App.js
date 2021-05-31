import React from "react";
import LeftPanel from "./panels/LeftPanel"
import RightPanel from "./panels/RightPanel"


import "./App.css";


function App() {

  return (

    <div className='splitScreen'>
      <div className="split left">
        <div className="centered">
          <LeftPanel/>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <RightPanel/>
        </div>
      </div>
    </div>
  );
}

export default App;


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>{!data ? "Loading..." : data}</p>
    //   </header>
    // </div>