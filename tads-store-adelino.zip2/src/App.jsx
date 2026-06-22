import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Vitrine from './components/Vitrine';
import ProdutoDetalhe from './pages/ProdutoDetalhe';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MinhaConta from './pages/MinhaConta';
import RotaProtegida from './components/RotaProtegida';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Vitrine />} />
        <Route path='/produto/:id' element={<ProdutoDetalhe />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/minha-conta'
          element={
            <RotaProtegida>
              <MinhaConta />
            </RotaProtegida>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
