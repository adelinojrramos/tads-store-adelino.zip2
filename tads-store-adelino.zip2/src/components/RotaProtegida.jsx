import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function RotaProtegida({ children }) {
  const { logado } = useContext(AuthContext);

  if (!logado) {
    return <Navigate to='/login' />;
  }

  return children;
}

export default RotaProtegida;
