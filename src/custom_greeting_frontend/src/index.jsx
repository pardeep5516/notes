import * as React from "react";
import { render } from "react-dom";
import App from "./components/App.jsx";


const MyHello = () => {


  return (<App />);
};

render(<MyHello />, document.getElementById("app"));