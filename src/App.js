
import './App.css';
import Getting from './Getting'
import Welcome from './Welcome'


function App() {
  return (
    <div className="App">
       <Getting title="nika" subtitle="Baxbaxashvili"/>
       <Welcome user="nika" age={50}/>
    </div>
  );
}

export default App;
