"use client"

import React, { useState } from "react";

const LoginForm: React.FC = () => {

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // Prevent default form submission behavior
  // Handle form submission logic here
  console.log("ur username is: ", username);
  console.log("Form submitted");
};

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-white font-bold text-3xl mb-8">Login Page</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {" "}
        {/* Added flex-column and centered items */}
        <div className="flex flex-col justify-left">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div className="flex flex-col justify-left">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <br />
        <div className="text-center">
          {" "}
          {/* Center the button horizontally */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
