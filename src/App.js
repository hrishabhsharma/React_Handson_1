import React, { useState} from "react"
import Fcomp from "./Handson_1/FComp.js"
import Ccomp from "./Handson_1/CComp.js"
import "./App.css"



function App(){
  const [fState , setFState] = useState(false)
  const [cState , setCState] = useState(false)

  return(
    <div>
    <h1 className="head">Styling using Functional and Class Component</h1>
    <div >
      <button onClick={() => setFState(!fState)} className="btn">To see styling in Functional component</button>
      <button onClick={() => setCState(!cState)} className="btn">To see styling in Class component</button>
    </div>
    <div className="container">
    {fState && <Fcomp/>}
    {cState && <Ccomp/>}
    </div>
    </div>
  )
}

export default App

