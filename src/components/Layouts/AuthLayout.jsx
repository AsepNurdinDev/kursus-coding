import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-center items-center">
          <img
            src="./images/acodelogo.png"
            alt="logo"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <p className="text-xl font-bold mb-2 text-gray-600 mt-6 text-center">
          Masuk ke Acode sekarang!
        </p>
        <p className="text-sm font-bold mb-2 text-gray-400 text-center">
          #Lanjutkan belajar coding dengan Acode
        </p>
        <h1 className="text-3xl font-bold mb-2 text-blue-600 text-center">
          {title}
        </h1>

        <p className="font-medium text-slate-500 mb-8 text-center">
          Welcome, please enter your details
        </p>
        {children}
        <p className="mb-2 mt-3 etxt-sm items-center justify-center flex">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" && (
            <Link to="/register" className="text-blue-600 font-semibold">
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="text-blue-600 font-semibold">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
