function Form() {
    const loginHandler = () =>{
        console.log("Login")
    }
  return (
    <div>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default Form;
