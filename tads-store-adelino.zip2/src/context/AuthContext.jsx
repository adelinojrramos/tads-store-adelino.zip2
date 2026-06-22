import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const usuario = localStorage.getItem('logado');
    if (usuario) setLogado(true);
  }, []);

  function entrar(username, password) {
    if (username === 'admin' && password === '123') {
      setLogado(true);
      localStorage.setItem('logado', 'true');
      return true;
    }
    return false;
  }

  function sair() {
    setLogado(false);
    localStorage.removeItem('logado');
  }

  return (
    <AuthContext.Provider value={{ logado, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}
