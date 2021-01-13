import { createContext } from 'react';
import { TLoginContext } from './type';

const loginContext = createContext<TLoginContext>({
  handleLogin: (isLogin: boolean) => null,
  handleToasts: ({ open, info }: { open: boolean; info: string }) => null,
});

export default loginContext;
