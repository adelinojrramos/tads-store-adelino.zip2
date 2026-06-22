import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProdutoDetalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduto(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <div>
      <h2>{produto.title}</h2>
      <img src={produto.thumbnail} alt={produto.title} />
      <p>Preço: R$ {produto.price}</p>
      <p>{produto.description}</p>
    </div>
  );
}

export default ProdutoDetalhe;
