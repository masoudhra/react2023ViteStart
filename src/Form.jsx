import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const loginHandler = () => {
    console.log({ email, password, role });
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const selectHandler = (event) => {
    setRole(event.target.value)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={emailHandler}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={passwordHandler}
      />
      <select value={role} onChange={selectHandler}>
        <option value="admin">User</option>
        <option value="writer">Writer</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default Form;
