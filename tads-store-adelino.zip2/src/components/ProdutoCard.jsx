import { Link } from 'react-router-dom';
import Botao from './Botao';

function ProdutoCard({ produto }) {
  return (
    <div className="card">
      <img src={produto.thumbnail} alt={produto.title} />
      <h3>{produto.title}</h3>
      <p>R$ {produto.price}</p>

      <Link to={`/produto/${produto.id}`}>
        <Botao texto='Ver detalhes' />
      </Link>
    </div>
  );
}

export default ProdutoCard;
