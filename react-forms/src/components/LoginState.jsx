import { useState } from "react";
import Input from "./Input";
import useInput from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../utils/validation";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 5));

  function handleSubmit(e) {
    e.preventDefault();

    if (emailIsInValid || passwordIsInvalid) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>

      <Input
        labelText="Email"
        id="email"
        error={emailHasError && "Enter Valid Email"}
        type="email"
        name="email"
        value={emailValue}
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        name="password"
        id="password"
        labelText="Password"
        error={passwordHasError && "Password should be minimum 6 letters"}
        value={passwordValue}
        onBlur={handlePasswordBlur}
        onChange={handlePasswordChange}
      />

      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
