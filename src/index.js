import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import "./styles.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    rootElement
);
