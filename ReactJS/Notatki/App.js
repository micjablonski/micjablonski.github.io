import logo from './logo.svg';
import './App.css';
import ButtonsPanel from './ButtonsPanel';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import Counter3 from './Counter3';
import Counter4 from './Counter4';
import Counter5 from './Counter5';
import Counter6 from './Counter6';
import Counter7 from './Counter7';
import Licznik from './Licznik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header">Counter App in ReactJs</h1>
      </header>
      <Counter1 initValue={0}/> 
      <Counter1 initValue={108}/>
      <Counter2 />
      <Counter3 />
      <Counter4 initValue={0}/>
      <Counter5 initValue={3}/>
      <Counter6 initValue={108}/>
      <Counter7 initValue={7}/>     
    <Licznik initValue={1}/>
    </div>
  );
}

export default App;
