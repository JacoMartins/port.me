import { Children, createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import Cookies from 'universal-cookie';

type SignInCredentials = {
  identificator: String;
  password: String;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  error?: string | null;
  token?: string;
  account?: Account;
}

type AuthProviderProps = {
  children: ReactNode;
}

type Account = {
  username: string;
  email: string;
}

export const AuthContext = createContext({} as AuthContextData);

const cookies = new Cookies();

export function AuthProvider({ children }: AuthProviderProps) {
  const [account, setAccount] = useState<Account>();
  const [error, setError] = useState<string | null>();
  const isAuthenticated = !!account;

  async function signIn({ identificator, password }: SignInCredentials) {
    try {
      const res = await api.post('/auth', {
        identificator,
        password
      }).then(res => {
        const {token, account} = res.data;
        setAccount(res.data.account);

        cookies.set('token', token, {
          maxAge: 60*60*24*30,
          path: '/'
        });

        cookies.set('refreshToken', token, {
          maxAge: 60*60*24*30,
          path: '/'
        });
        
      });

      setError(null);
    } catch (POST) {
      setError('Nome de usuário ou senha inválidos.');
    }
  }


  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, error, account }}>
      {children}
    </AuthContext.Provider>
  )
}