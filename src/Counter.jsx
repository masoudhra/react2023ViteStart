const Counter = () => {

function increaseHandler(){
    console.log("increase");
}

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  );
};

export default Counter;
