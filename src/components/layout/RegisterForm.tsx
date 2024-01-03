import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, storage } from "../../app/firebase";

import { ButtonSubmit } from "../utils/helper";

const registerSchema = z
  .object({
    username: string().min(4, {
      message: "Username must be atleast 4 characters long.",
    }),
    email: string().email({ message: "Invalid Email address!" }),
    password: string().min(4, { message: "invalid Password" }),
    confirmPassword: string(),
    // profilePic: string(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    },
  );

export type RegisterProps = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({ resolver: zodResolver(registerSchema) });

  const submitHandler = async (data: RegisterProps) => {
    const username = data.username;
    const loginEmail = data.email;
    const loginPassword = data.password;
    const profilePic = data.profilePic;

    console.log(data);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );

      const storageRef = ref(storage, "images/rivers.jpg");
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          console.log("Error has occured!");
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName: username,
              photoURL: profilePic,
            });
          });
        },
      );
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
    <div className="w-[420px] rounded-md bg-gray-950 p-10">
      <form onSubmit={handleSubmit(submitHandler)}>
        {/* // Username */}
        <div className="form-control">
          <label
            htmlFor="username"
            className="mb-2 flex gap-2 text-sm text-gray-50"
          >
            Username
          </label>
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
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </figure>
            <input
              id="username"
              autoFocus
              type="text"
              placeholder="Enter Username"
              {...register("username")}
              className="w-full rounded-sm border border-l-0 border-slate-600 bg-transparent p-2 text-sm text-white caret-white focus:outline-none"
            />
          </div>
          <p className="form-error">{errors.username?.message}</p>
        </div>
        {/* // Email */}
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
              type="email"
              placeholder="Enter Email"
              {...register("email")}
              className="w-full rounded-sm border border-l-0 border-slate-600 bg-transparent p-2 text-sm text-white caret-white focus:outline-none"
            />
          </div>
          <p className="form-error">{errors.email?.message}</p>
        </div>
        {/* // Password */}
        <div className="form-control">
          <label
            htmlFor="password"
            className="mb-2 flex gap-2 text-sm text-gray-50"
          >
            Password
          </label>
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
              id="password"
              type="password"
              placeholder="Enter Password"
              {...register("password")}
              className="w-full rounded-sm border border-l-0 border-slate-600 bg-transparent p-2 text-sm text-white caret-white focus:outline-none"
            />
          </div>
          <p className="form-error">{errors.password?.message}</p>
        </div>
        {/* // Confirm Password */}
        <div className="form-control">
          <label
            htmlFor="confirmPassword"
            className="mb-2 flex gap-2 text-sm text-gray-50"
          >
            Confirm Password
          </label>
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
              id="confirmPassword"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full rounded-sm border border-l-0 border-slate-600 bg-transparent p-2 text-sm text-white caret-white focus:outline-none"
            />
            <p className="form-error">{errors.confirmPassword?.message}</p>
          </div>
        </div>
        {/* Profile Picture */}
        <div className="relative mt-6">
          <input
            type="file"
            id="profilePic"
            accept=".jpg,.jpeg,.png,.webp"
            // {...register("profilePic")}
            className="relative z-10 cursor-pointer text-xs text-white opacity-0"
          />

          <div className="absolute top-0 z-0 flex items-center gap-2">
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
            <span className="cursor-pointer text-xs text-white">
              Upload Picture
            </span>
          </div>
        </div>

        <ButtonSubmit btnText="Register" />
      </form>
    </div>
  );
};

export default RegisterForm;
