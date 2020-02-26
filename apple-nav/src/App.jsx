import React from 'react';
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
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
      <Route exact path="/">
        <Home />
      </Route>
      {/* <AnimatedRoute path="/mac"
        render={() => <SubNav items={data.mac} />}
        atEnter={{ offset: -100 }}
        atLeave={{ offset: -100 }}
        atActive={{ offset: 0 }}
        mapStyles={(styles) => ({
          transform: `translateX(${styles.offset}%)`,
        })}
      /> */}
      <AnimatedSwitch
        atEnter={{ offset: -100 }}
        atLeave={{ offset: 0 }}
        atActive={{ offset: 0 }}
        mapStyles={(styles) => ({
          transform: `translateY(${styles.offset}%)`
        })}>
        <Route path="/mac">
          <SubNav items={data.mac} />
        </Route>
        <Route path="/ipad">
          <SubNav items={data.ipad} />
        </Route>
        <Route path="/iphone">
          <SubNav items={data.iphone} bgColor="#424245" textColor="white" />
        </Route>
        <Route path="/watch">
          <SubNav items={data.watch} />
        </Route>
        <Route path="/tv">
          <SubNav items={data.tv} bgColor="#424245" textColor="white" />
        </Route>
        <Route path="/music">
          <SubNav items={data.music} bgImg="linear-gradient(to right, #fe7142 0%, #cb4fc2 50%, #9A57E8 75%, #53A0E8 100%)" textColor="white" />
        </Route>
      </AnimatedSwitch>
    </div>
  );
}

export default App;
