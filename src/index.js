import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
// import { SessionStorage as Repository } from "./lib/repositories";
import { RestApi as Repository } from "./lib/repositories";

ReactDOM.render(<App repo={new Repository()} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
