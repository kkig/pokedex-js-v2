import styled from 'styled-components';

import CardSection from './components/CardSection';

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
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <div className='App'>
      <Header className='App-header'>
        <h3 className='app-title'>Pokédex</h3>
      </Header>
      <Main>
        <CardSection />
      </Main>
    </div>
  );
}

export default App;
