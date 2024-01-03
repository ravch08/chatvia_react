import { useForm } from "react-hook-form";
import { ButtonSubmit } from "../utils/helper";

import { zodResolver } from "@hookform/resolvers/zod";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { string, z } from "zod";
// import { auth } from "../../app/firebase";
import { RegisterProps } from "./RegisterForm";

const loginSchema = z.object({
  email: string().email({ message: "Invalid Email address!" }),
  password: string(),
});

const LoginForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({ resolver: zodResolver(loginSchema) });

  const formSubmit = async (data: RegisterProps) => {
    const loginEmail = data.email;
    const loginPassword = data.password;
    const profilePic = data.profilePic;
    const displayName = loginEmail.slice(0, 4);

    console.log(data);
    console.log(displayName);

    // signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });

    // reset();
  };

  return (
    <div className="w-[420px] rounded-md bg-gray-950 p-10">
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="form-control">
          <label
            htmlFor="email"
            className="mb-2 flex gap-2 text-sm text-gray-50"
          >
            Email
          </label>
          <div className="flex items-center">
            <figure className="border border-slate-600 p-2.5">
              <svg
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-transparent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </figure>
            <input
              id="email"
              autoFocus
              type="email"
              placeholder="admin@example.com"
              className="w-full rounded-sm border border-l-0 border-slate-600 bg-transparent p-2 text-sm text-white caret-white focus:outline-none"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required!",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format!",
                },
              })}
            />
          </div>
          <p className="mb-4 text-sm text-red-500">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <div className="flex items-center justify-between text-sm text-gray-50">
            <label htmlFor="password" className="mb-2 flex gap-2">
              Password
            </label>
            <a
              href="#!"
              className="mb-2 text-sm transition-colors ease-out hover:text-white"
            >
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center">
            <figure className="border border-slate-600 p-2.5">
              <svg
                fill="none"
                stroke="white"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                className="h-4 w-4 bg-transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </figure>
            <input
              type="password"
              id="password"
              placeholder="********"
              {...register("password")}
              className="w-full rounded-sm border border-l-0 border-slate-600 bg-transparent p-2 text-sm text-white caret-white focus:outline-none"
            />
          </div>
          <p className="my-4 text-sm text-red-500">
            {errors.password?.message}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-50">
          <input
            type="checkbox"
            id="checkbox"
            className="rounded-xs h-4 w-4 border-none p-2 focus:bg-primary-400"
          />
          <span>Remember me</span>
        </div>

        <ButtonSubmit btnText="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
