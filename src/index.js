import React from "react";
import ReactDOM from "react-dom";
import ColoradoStateParks from "./ColoradoStateParks";
import About from "./components/About";
import Home from "./components/Home";

ReactDOM.render(<ColoradoStateParks />, document.getElementById("root"));

function App {
    return (
        <div>
            <About/>
            <Home/>
        </div>
    )
}