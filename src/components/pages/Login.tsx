import { Link } from "react-router-dom";
import { LoginForm, Wrapper, logoLight } from "../utils/helper";

const Login = () => {
  return (
    <Wrapper>
      <Link to="/login">
        <img src={logoLight} alt="logo" width={150} className="mb-8" />
      </Link>

      <div className="mb-10 flex flex-col gap-2 text-center">
        <h2 className="text-xl text-white">Sign in</h2>
        <p className="text-gray-50">Sign in to continue to Chatvia.</p>
      </div>

      <LoginForm />

      <div className="mb-2 mt-8 flex items-center gap-2 text-gray-50">
        <p>Don't have an account ?</p>
        <Link
          to="/register"
          className="text-primary-400 transition-colors ease-in-out hover:text-primary-600"
        >
          Signup now
        </Link>
      </div>
      <p className="text-gray-50">© 2023 Chatvia.</p>
    </Wrapper>
  );
};

export default Login;
