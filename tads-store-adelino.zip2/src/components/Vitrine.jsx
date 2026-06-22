import { useEffect, useState } from 'react';
import ProdutoCard from './ProdutoCard';

function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    let url = 'https://dummyjson.com/products';

    if (categoria) {
      url = `https://dummyjson.com/products/category/${categoria}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data.products);
        setLoading(false);
      })
      .catch(() => {
        setErro('Erro ao carregar produtos');
        setLoading(false);
      });
  }, [categoria]);

  const produtosFiltrados = produtos.filter((p) =>
    p.title.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) return <p>Carregando...</p>;
  if (erro) return <p>{erro}</p>;

  return (
    <div>
      <h2>Produtos</h2>

      {/* Busca */}
      <input
        type='text'
        placeholder='Buscar produto...'
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {/* Filtro */}
      <select onChange={(e) => setCategoria(e.target.value)}>
        <option value=''>Todas</option>
        <option value='smartphones'>Smartphones</option>
        <option value='laptops'>Laptops</option>
        <option value='fragrances'>Perfumes</option>
        <option value='skincare'>Skincare</option>
      </select>

      {/* Lista */}
      <div className="vitrine">
        {produtosFiltrados.map((p) => (
          <ProdutoCard key={p.id} produto={p} />
        ))}
      </div>
    </div>
  );
}

export default Vitrine;
