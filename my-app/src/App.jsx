import './App.css';
import Square from './Components/010/Square';






function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <h1>Props</h1>

<Square color="red"name="Pirmadienis" size={100}show={true}></Square>
<Square color="crimson"name="Antradienis"size= {100}show={true}></Square>
<Square color="crimson"name="Valio"size={333}show={true}></Square>

      </header>
    </div>
  );
}

export default App;