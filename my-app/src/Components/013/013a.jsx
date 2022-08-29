import { useState } from 'react';
import './App.scss';


function App() {


    console.log('Start');

const[count,setCount]= useState(3);



const mult5= ()=> {
    setCount(c=>c*5);
    //setCount(c=>c*5);
}

const reset3 =() => {
    setCount(3);
}



  return (
    <div className="App">
      <header className="App-header">
        <h1>Caunt{count}</h1>



<button onClick={mult5}>M1</button>
<button onClick={reset3}>M2</button>
<button>M3</button>

          </header>
    </div>
  );
}

export default App;