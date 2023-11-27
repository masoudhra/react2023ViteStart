import { useState } from "react";

const Counter = () => {
const [counter, setCounter ] = useState(0)


const increaseHandler = () =>  setCounter(counter + 1);
const increaseHandler3 = () => {
  // setCounter(counter + 3)
  // agar taghir be meghdare tahire habli vabaste bood be in shekl ba elesh esteffade mikonim
  setCounter(counter => counter + 1);
  setCounter(counter => counter + 1);
  setCounter(counter => counter + 1);
};

const stopHandler = () =>{
  setCounter("-");
};
 
  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={increaseHandler}>Increase 1</button>
      <br />
      <br />
      <button onClick={increaseHandler3}>Increase 3</button>
      <br />
      <br />
      <button onClick={stopHandler}>Stop</button>
    </div>
  );
};

export default Counter;
