import React from "react";
import { SignUpLayout } from "../components/Layouts/SignUpLayout";

export const SignUpPage = () => {
  return (
    <div className="section w-full h-[100dvh] bg-teal-500 flex flex-col lg:flex-row justify-center items-center">
      <SignUpLayout></SignUpLayout>
    </div>
  );
};
