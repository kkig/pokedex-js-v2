import styled from 'styled-components';

import Card from './components/Card';

const Header = styled.header`
  text-align: center;
  padding-top: 3rem;
  min-height: 100%;

  .app-title {
    font-size: 2rem;
    letter-spacing: 0.15rem;
  }
`;

const Main = styled.main`
  min-height: 100%;
`;

function App() {
  return (
    <div className='App'>
      <Header className='App-header'>
        <h3 className='app-title'>Pokédex</h3>
      </Header>
      <Main>
        <Card />
      </Main>
    </div>
  );
}

export default App;
