import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const Card = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PokeList />
    </QueryClientProvider>
  );
};

const fetchPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
  const data = await response.json();

  return data;
};

const PokeList = () => {
  const { status, data, error } = useQuery('pokeData', fetchPokemon);

  if (status === 'loading') return 'Loading Pokemon...';
  if (status === 'error') return `Error: ${error.message}`;
  console.log(data);

  return (
    <ul>
      {data.results.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default Card;
