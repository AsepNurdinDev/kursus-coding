import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";

const FormLogin = () => {
  return (
    <form className="space-y-4">
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Enter your username"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <Button
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-4 w-full rounded-lg transition duration-300"
        type="submit"
      >
        <a href="/courses">Login</a>
      </Button>
    </form>
  );
};

export default FormLogin;
