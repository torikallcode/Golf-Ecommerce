import React from "react";
import { LoginLayout } from "../components/Layouts/LoginLayout";

export const LoginPage = () => {
  return (
    <div className="section w-full h-[100dvh] bg-teal-500 flex flex-col lg:flex-row justify-center items-center">
      <LoginLayout></LoginLayout>
    </div>
  );
};
