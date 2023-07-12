import Fcomp from "./Handson_1/FComp.js"
import Ccomp from "./Handson_1/CComp.js"
import "./App.css"


function btn1(){
document.querySelector('.box1').style.visibility =  "visible";
}
function btn2(){
document.querySelector('.box2').style.visibility =  "visible";
}

function App(){
  return(
    <div>
    <h1 className="head">Styling using Functional and Class Component</h1>
    <div >
      <button onClick={btn1} className="btn">To see styling in Functional component</button>
      <button onClick={btn2} className="btn">To see styling in Class component</button>
    </div>
    <div className="container">
    <Fcomp/>
    <Ccomp/>
    </div>
    </div>
  )
}

export default App

