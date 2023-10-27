import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormDataProps, LoginRegisterProps } from "../../types/types";
import { ButtonSubmit } from "../utils/helper";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, storage } from "../../app/firebase";

const LoginForm = (props: LoginRegisterProps) => {
  const [fileName, setFileName] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data: FormDataProps) => {
    const loginEmail = data.email;
    const loginPassword = data.password;
    const uploadFile = data.uploadFile;
    console.log(data);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );

      const storageRef = ref(storage, loginEmail);
      const uploadTask = uploadBytesResumable(storageRef, uploadFile);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        },
      );
    } catch (error) {
      console.log(error.message);
    }
    reset();
  };

  const handleUpload = (e) => {
    const fileName = e.target.files[0].name;
    setFileName(fileName);
  };

  const showRemember =
    props.remember === "false"
      ? "hidden"
      : "flex items-center gap-2 mt-4 text-sm text-gray-50";

  const showForgot =
    props.forgot === "false"
      ? "hidden"
      : "transition-colors ease-out hover:text-white";

  const showUpload = props.upload === "false" ? "hidden" : "relative mt-6";

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

        <div className={showUpload}>
          <input
            type="file"
            id="profilePic"
            onChange={handleUpload}
            accept=".jpg,.jpeg,.png,.webp"
            className="relative z-10 cursor-pointer text-xs text-white opacity-0"
            {...register("profilePic", {
              required: {
                value: true,
                message: "File is Required!",
              },
            })}
          />

          <div className="absolute top-0 z-0 flex cursor-pointer items-center gap-2">
            <svg
              fill="none"
              stroke="white"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <span className="text-xs text-white">
              {fileName ? fileName : "Uplaod picture"}
            </span>
          </div>
        </div>
        <ButtonSubmit btnText={props.btnType} />
      </form>
    </div>
  );
};

export default LoginForm;
