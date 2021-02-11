import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const queryClient = new QueryClient();

const PokeCard = styled(Card)`
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  letter-spacing: 0.025rem;
`;

const CardSection = () => {
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

  if (status === 'loading') return <CircularProgress />;
  if (status === 'error') return `Error: ${error.message}`;
  console.log(data);

  return (
    <div>
      {data.results.map((pokemon) => (
        <PokeCard key={pokemon.name}>{pokemon.name}</PokeCard>
      ))}
    </div>
  );
};

export default CardSection;
