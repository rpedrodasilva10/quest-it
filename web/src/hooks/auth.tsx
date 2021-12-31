import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

type User = {
  id: number;
  name: string;
  email: string;
  type: 'PARENT' | 'CHILDREN';
};

type AuthData = {
  user: User;
  token: string;
};

interface AuthContextData {
  user: User;
  token: string;
  signIn({ email, password }: SignInCredentials): Promise<void>;
  signOut(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@QuestIt:token');
    const user = localStorage.getItem('@QuestIt:user');

    return token && user ? { token, user: JSON.parse(user) } : ({} as AuthData);
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/authenticate', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@QuestIt:token', token);
    localStorage.setItem('@QuestIt:user', JSON.stringify(user));

    setAuthData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@QuestIt:token');
    localStorage.removeItem('@QuestIt:user');

    setAuthData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, token: authData.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('Context must be used within an  AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
