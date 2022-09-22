
import React from "react";
import data from "./data.json"


function App() {
  return (
    <div className="App">
      <h2>React</h2>
      <div>
        {data.map((val) => {
          return (<div>
            {val.id}
            {val.title}
            <img src={val.img} />
          </div>)
        })}
      </div>
      <p>process running {process.env.REACT_APP_ENV}</p>
    </div>
  )
}
export default App;

