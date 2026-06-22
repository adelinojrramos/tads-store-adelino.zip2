import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Cabecalho() {
  const { logado, sair } = useContext(AuthContext);

  return (
    <header>
      <h1>AJR Store 🛒</h1>

      {logado ? (
        <>
          <Link to='/minha-conta'>Minha Conta</Link>
          <button onClick={sair}>Sair</button>
        </>
      ) : (
        <Link to='/login'>Entrar</Link>
      )}
    </header>
  );
}

export default Cabecalho;
