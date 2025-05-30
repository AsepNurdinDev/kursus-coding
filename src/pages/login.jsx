import { Link } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
import Button from "../components/Elements/Button";

const LoginPage = () => {
  return (
    <div>
      <AuthLayout title="Login" type="login">
        <FormLogin />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
