import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { entrar } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const sucesso = entrar(username, password);

    if (sucesso) {
      navigate('/minha-conta');
    } else {
      alert('Login inválido');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type='text'
        placeholder='Usuário'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type='password'
        placeholder='Senha'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type='submit'>Entrar</button>
    </form>
  );
}

export default Login;
