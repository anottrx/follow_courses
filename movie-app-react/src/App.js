import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}>
        <h1>Home</h1>
      </Route>
      <Route path="/about" component={About}>
        <h1>About</h1>
      </Route>
    </HashRouter>
  );
}

export default App;