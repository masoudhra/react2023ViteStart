import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [gender, setGender] = useState("male");
  const [rules, setRules] = useState(false);

  const loginHandler = () => {
    console.log({ email, password, role, gender, rules});
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const selectHandler = (event) => {
    setRole(event.target.value);
  };

  const genderHandler = (event) => {
    setGender(event.target.value);
  };

  const rulesHandler = (event) => {
    setRules((rules) => !rules);
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
      <div>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={genderHandler}
          checked={gender === "male"}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={genderHandler}
          checked={gender === "female"}
        />
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          name="gender"
          id="other"
          value="other"
          onChange={genderHandler}
          checked={gender === "other"}
        />
      </div>
      <input type="checkbox" checked={rules} onChange={rulesHandler} />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default Form;
