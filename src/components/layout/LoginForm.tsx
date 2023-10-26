import { useForm } from "react-hook-form";
import { FormDataProps, LoginRegisterProps } from "../../types/types";
import { ButtonSubmit } from "../utils/helper";

const LoginForm = (props: LoginRegisterProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showRemember =
    props.remember === "false"
      ? "hidden"
      : "flex items-center gap-2 mt-4 text-sm text-gray-50";

  const showForgot =
    props.forgot === "false"
      ? "hidden"
      : "transition-colors ease-out hover:text-white";

  const formSubmit = (data: FormDataProps) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-[420px] rounded-md bg-gray-950 p-10">
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="email" className="mb-2 flex gap-2 text-sm text-gray-50">
          Email
        </label>
        <div className="mb-6 flex items-center">
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
            type="email"
            id="email"
            placeholder={props.emailPlaceholder}
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
        <div className="flex items-center justify-between text-sm text-gray-50">
          <label htmlFor="password" className="mb-2 flex gap-2">
            Password
          </label>
          <a href="#!" className={showForgot}>
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
            placeholder={props.passwordPlaceholder}
            className="w-full rounded-sm border border-l-0 border-slate-600 bg-transparent p-2 text-sm text-white caret-white focus:outline-none"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required!",
              },
              // pattern: {
              //   // Minimum eight characters, at least one letter, one number, and one special character
              //   value:
              //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
              //   message:
              //     "Password must contain eight characters, at least one letter, one number, and one special character",
              // },
            })}
          />
        </div>
        <p className="my-4 text-sm text-red-500">{errors.password?.message}</p>
        <div className={showRemember}>
          <input
            type="checkbox"
            id="checkbox"
            className="rounded-xs h-4 w-4 border-none p-2 focus:bg-primary-400"
          />
          <span>Remember me</span>
        </div>
        <ButtonSubmit btnText={props.btnType} />
      </form>
    </div>
  );
};

export default LoginForm;
