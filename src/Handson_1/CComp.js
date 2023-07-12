import React, { Component } from "react";
import "./Comp.css"

class Ccomp extends Component{
    render(){
        return(
        <div className="box box2">
            <h1>This is created using Class Component</h1>
            <p>This is done using external css</p>
            <p style={{color:"blue",fontSize:"15px"}}>This is done using inline css</p>
        </div>
        )
    }
    
}

export default Ccomp;