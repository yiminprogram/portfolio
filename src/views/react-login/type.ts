export type TUserInput = {
  email: string;
  password: string;
};

export type TCardProps = {
  hasAccount: boolean;
  setHasAccount?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TLoginContext = {
  handleLogin: (isLogin: boolean) => void;
  handleToasts: ({ open, info }: { open: boolean; info: string }) => void;
};

export type TToasts = {
  open: boolean;
  info: string;
};
