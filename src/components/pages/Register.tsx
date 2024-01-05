import { Link } from "react-router-dom";
import { RegisterForm, Wrapper, logoLight } from "../utils/helper";

const Register = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src={logoLight} alt="logo" width={150} className="mb-8" />
      </Link>

      <div className="mb-10 flex flex-col gap-2 text-center">
        <h2 className="text-xl text-white">Register</h2>
        <p className="text-gray-50">Get your Chatvia account now.</p>
      </div>

      <RegisterForm />

      <div className="mb-2 mt-8 flex items-center gap-2 text-gray-50">
        <p>Already have an account ?</p>
        <Link
          to="/login"
          className="text-primary-400 transition-colors ease-in-out hover:text-primary-600"
        >
          Signin
        </Link>
      </div>
      <p className="text-gray-50">© 2023 Chatvia.</p>
    </Wrapper>
  );
};

export default Register;
