import { Children, createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import Cookies from 'universal-cookie';

type SignInCredentials = {
  identificator: String;
  password: String;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  isAuthenticated: boolean;
  status?: number | null;
  token?: string;
  account?: Account;
  isLoadingData: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

type Account = {
  username: string;
  email: string;
  profile_picture: string;
}

export const AuthContext = createContext({} as AuthContextData);

const cookies = new Cookies();

export function AuthProvider({ children }: AuthProviderProps) {
  const [account, setAccount] = useState<Account>();
  const [status, setStatus] = useState<number | null>();
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const isAuthenticated = !!account;

  useEffect(() => {
    const token = cookies.get('token');

    if (token) {
      const fetch = async () => {
        await api.get(`/auth/me`)
          .then(res => setAccount(res.data))
      };

      fetch();
    }
  }, []);

  async function signIn({ identificator, password }: SignInCredentials) {
    try {
      setIsLoadingData(true);
      const res = await api.post('/auth', {
        identificator,
        password
      }).then(res => {
        const { refresh_token, token, account } = res.data;
        setAccount(account);

        cookies.set('token', token, {
          maxAge: 60 * 60 * 24 * 30,
          path: '/'
        });

        cookies.set('refreshToken', refresh_token, {
          maxAge: 60 * 60 * 24 * 30,
          path: '/'
        });

        api.defaults.headers.post['Authorization'] = `Bearer ${refresh_token}`;
      });
      setIsLoadingData(false);


      setStatus(201);
    } catch (POST) {
      setIsLoadingData(false);
      setStatus(400);
      return;
    }
  }

  function signOut(){
    setAccount(undefined);
    cookies.remove('token', {
      path: '/'
    });
    cookies.remove('refreshToken', {
      path: '/'
    });
    window.location.href = '/';
  }


  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, status, account, isLoadingData }}>
      {children}
    </AuthContext.Provider>
  )
}