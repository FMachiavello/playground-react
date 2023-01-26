import './App.css';
import {Testimony} from './components/Testimony';
import data from './data/champions.json'

function App() {
  return (
    
    <div className="App">
      <div className='main-container'>
        <h1>Esto es lo que dice nuestro equipo:</h1>
        {data.map( champion=>
          <Testimony
            name={champion.name}
            hood={champion.hood}
            role={champion.role}
            testimony={champion.testimony}
          />
        )}
        
        
      </div>
      
      
    </div>
  );
}

export default App;
