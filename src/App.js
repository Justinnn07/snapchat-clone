import React from "react";
import "./App.css";
import WebCamCapture from "./WebCamCapture";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <div className="app__body">
            <Route path="/chats">
              <Chats />
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route exact path="/">
              <WebCamCapture />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
