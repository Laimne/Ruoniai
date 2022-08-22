import './App.css';
import Black from './Components/009/Black';
import White from './Components/009/White';
import rand from './Functions/rand';



//import Bebras from './Components/009/Bebras';
//import Gele from './Components/Gele';
//rodo arba viena komponenta arba kita parefresinus  { rand(0 , 1) ? <Black/> : <White/>}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/*<Bebras></Bebras>*/}
      {/*<Gele></Gele>*/}
        <h1>Labas</h1>
      {/*<Bebras></Bebras>*/}

      {
rand(0 , 1) ? <Black/> : <White/>
      }



      </header>
    </div>
  );
}

export default App;
