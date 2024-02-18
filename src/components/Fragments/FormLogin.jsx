import React from "react";
import { InputLogin } from "../Elements/Input.jsx/InputLogin";

export const FormLogin = () => {
  return (
    <form action="" className="flex flex-col mb-8">
      <InputLogin
        type="Text"
        placeholder="Your username or email address"
        className="mb-8"
      ></InputLogin>
      <InputLogin
        type="Password"
        placeholder="Password"
      ></InputLogin>
    </form>
  );
};
