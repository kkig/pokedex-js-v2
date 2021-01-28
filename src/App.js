import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h3 className='app-title'>Pokédex</h3>
      </header>
      <main>
        <Card />
      </main>
    </div>
  );
}

export default App;
