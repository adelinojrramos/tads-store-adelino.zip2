import Cabecalho from './Cabecalho';
import Rodape from './Rodape';

function Layout({ children }) {
  return (
    <>
      <Cabecalho />
      <main>{children}</main>
      <Rodape />
    </>
  );
}

export default Layout;
