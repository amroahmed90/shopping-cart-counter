import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
//add the next 2 lines
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

//change App to Counter in the render method
ReactDOM.render(<Counters />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
