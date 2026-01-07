import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const initalValues = { email: "", password: "" };

  const [values, setValues] = useState(initalValues);

  const [isEdited, setIsEdited] = useState({ email: false, password: false });

  const emailIsInValid = isEdited.email && !values.email.includes("@");
  const passwordIsInvalid = isEdited.password && values.password.length <= 5;

  function handleInputBlur(e) {
    const name = e.target.name;

    setIsEdited((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });

    setIsEdited((prev) => ({
      ...prev,
      [name]: false,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>

      <Input
        labelText="Email"
        id="email"
        error={emailIsInValid && "Enter Valid Email"}
        type="email"
        name="email"
        value={values.email}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        id="password"
        labelText="Password"
        error={passwordIsInvalid && "Password should be minimum 6 letters"}
        value={values.password}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
      />

      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
