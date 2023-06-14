//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import ClockComponent from "./component/counter.jsx";
import { SecondsCounter } from "./component/counter.jsx";

//render your react applicat
//ReactDOM.render(<ClockComponent />, document.querySelector("#app"));
ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));
