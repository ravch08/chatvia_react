import { ReactNode } from "react";

export type LoginRegisterProps = {
  forgot: "true" | "false";
  remember: "true" | "false";
  btnType: "Login" | "Register";
  emailPlaceholder: string;
  passwordPlaceholder: string;
};

export type Wrapperprops = {
  children: ReactNode;
};

export type FormDataProps = {
  email: string;
  password: string;
};
