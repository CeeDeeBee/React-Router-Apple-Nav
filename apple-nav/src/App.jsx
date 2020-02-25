import React from 'react';
import { Route } from "react-router-dom";
import { MainNav, Home, SubNav } from "./components/index";
import data from "./subNavData";
import './App.css';

function App() {
  console.log(data);
  return (
    <div className="App">
      <header>
        <MainNav />
      </header>
      <Route exact path="/"><Home /></Route>
      <Route path="/mac">
        <SubNav items={data.mac} />
      </Route>
      <Route path="/ipad"></Route>
      <Route path="/iphone"></Route>
      <Route path="/watch"></Route>
      <Route path="/tv"></Route>
      <Route path="/music"></Route>
      <Route path="/support"></Route>
    </div>
  );
}

export default App;
