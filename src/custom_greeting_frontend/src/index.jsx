import * as React from "react";
import { render } from "react-dom";
import { custom_greeting_backend } from "../../declarations/custom_greeting_backend/index.js";
import App from "./components/App.jsx";


const MyHello = () => {


  return (<App />);
};

render(<MyHello />, document.getElementById("app"));