import { ReactNode } from "react";

export type LoginRegisterProps = {
  forgot: "true" | "false";
  remember: "true" | "false";
  upload: "true" | "false";
  btnType: "Login" | "Register";
  emailPlaceholder: string;
  passwordPlaceholder: string;
};

export type Wrapperprops = {
  children: ReactNode;
};

export type ChatItemProps = {
  name: string;
  imgSrc: string;
  message: string;
};

export type FormDataProps = {
  email: string;
  password: string;
  uploadFile: string;
};

export type SidebarHandlerProps = {
  onClickChats: (bool: boolean) => void;
  onClickProfile: (bool: boolean) => void;
  onClickSettings: (bool: boolean) => void;
};

export type ChatMessageProps = {
  imgSrc: string;
  owner: boolean;
  message: string;
  sampleImg?: string;
};
