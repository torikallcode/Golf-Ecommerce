import React, { useState } from "react";
import { InputLogin } from "../Elements/Input.jsx/InputLogin";
import { Link } from "react-router-dom";
import { ButtonLogin } from "../Elements/Button/ButtonLogin";

export const FormLogin = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (username == "Torikal" && password == "akbar") {
      alert("anda berhasil login")
    } else {
      alert("Login gagal")
    }
  }

  return (<>

    <form action="" className="flex flex-col mb-8">
      <InputLogin
        type="Text"
        placeholder="Your username or email address"
        className="mb-8"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></InputLogin>
      <InputLogin
        type="Password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></InputLogin>
    </form>
    <Link to={"/"}>
      <ButtonLogin onClick={handleLogin} text="Sign in" />
    </Link>
  </>
  );
};
