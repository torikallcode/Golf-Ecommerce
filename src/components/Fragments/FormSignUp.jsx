import React from "react";
import { InputLogin } from "../Elements/Input.jsx/InputLogin";

export const FormSignUp = () => {
  return (
    <form action="" className="flex flex-col mb-8">
      <InputLogin
        type="Text"
        placeholder="Your name"
        className="mb-8"
      ></InputLogin>
      <InputLogin
        type="Text"
        placeholder="Username"
        className="mb-8"
      ></InputLogin>
      <InputLogin
        type="email"
        placeholder="Email adress"
        className="mb-8"
      ></InputLogin>
      <InputLogin
        type="Password"
        placeholder="Password"
      ></InputLogin>
    </form>
  );
};
