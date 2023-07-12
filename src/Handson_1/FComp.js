import React from "react";
import "./Comp.css"

function Fcomp(){
    return(
        <div className="box box1">
            <h1>This is created using functional Component</h1>
            <p>This is done using external css</p>
            <p style={{color:"blue",fontSize:"15px"}}>This is done using inline css</p>
        </div>
    )
}

export default Fcomp;