import React, {Fragment} from "react";
import Provider from "./provider";
import context from "./context";
import What from "./components/What";

const Agents = () => {
  return <AgentOne />
}

const AgentOne = () => {
  return <AgentTwo />
}

const AgentTwo = () => {
  return <AgentBond />
}

const AgentBond = () => {
  return (
    <context.Consumer>
    {
      (context) => (
        <Fragment >
          <div style={{padding:'0px 30px '}}>
            <h1> Context API </h1>
            <h3 > Agent Information </h3>
            <p> Mission Name : {context.data.mname}</p>
            <h2> Mission Status : {context.data.accept}</h2>
            <button onClick={context.isMissionAccepted}> 
              Choose to accept 
            </button>
            <What />
          </div>
        </Fragment>
      ) 
    }
    </context.Consumer>
  )
}

const App = () => {
  return(
    <div>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}

export default App; 