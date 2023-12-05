import { useState } from "react";

function Form() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [role, setRole] = useState("user");
  // const [gender, setGender] = useState("male");
  // const [rules, setRules] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user",
    gender: "male",
    rules: false,
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "rules") {
      setForm((form) => ({ ...form, rules: !form.rules }));
    } else {
      setForm((form) => ({ ...form, [name]: value }));
    }
  };

  const loginHandler = () => {
    console.log(form);
  };

  // const emailHandler = (event) => {
  //   setEmail(event.target.value);
  // };

  // const passwordHandler = (event) => {
  //   setPassword(event.target.value);
  // };

  // const selectHandler = (event) => {
  //   setRole(event.target.value);
  // };

  // const genderHandler = (event) => {
  //   setGender(event.target.value);
  // };

  // const rulesHandler = (event) => {
  //   setRules((rules) => !rules);
  // };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={changeHandler}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={changeHandler}
      />
      <select value={form.role} name="role" onChange={changeHandler}>
        <option value="user">User</option>
        <option value="writer">Writer</option>
        <option value="admin">Admin</option>
      </select>
      <div>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={changeHandler}
          checked={form.gender === "male"}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={changeHandler}
          checked={form.gender === "female"}
        />
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          name="gender"
          id="other"
          value="other"
          onChange={changeHandler}
          checked={form.gender === "other"}
        />
      </div>
      <input
        type="checkbox"
        checked={form.rules}
        name="rules"
        onChange={changeHandler}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default Form;
