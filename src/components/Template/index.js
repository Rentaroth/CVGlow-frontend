import React from "react";
import { Designer001 } from "../Designer-001";
import { Designer002 } from "../Designer-002"

function Template() {
  const [state, setState] = React.useState(1);
  const changePage = () => {
    if(state === 1) {
      setState(2);
    } else {
      setState(1);
    }
  }
  console.log(state);
  return (
    <React.Fragment>
      {state === 1 && <Designer001 />}
      {state === 2 && <Designer002 />}
      <button onClick={() => {
        changePage()
      }}>Cambio!</button>
    </React.Fragment>
  );
}

export { Template };