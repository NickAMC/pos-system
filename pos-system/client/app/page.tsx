import React from "react";
import LoginForm from "./components/LoginForm";

const LoginPage:React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LoginForm />
    </div>
  );
};

export default LoginPage;

