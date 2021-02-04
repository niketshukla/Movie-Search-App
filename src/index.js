import React from "react";
import ReactDom from 'react-dom';
import App from "./components/App";
import './main.css';

ReactDom.render(
    <App />,
    document.querySelector("#root")
);