
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='day01-1'>
     <h1>Let we see the output of Javascript</h1>
         <button className='btn btn-danger' onClick={window['alertmsg']}>Click me</button>
     </div><br/><br/><br/>
     <div className='day01-2'>
      <h1>DAY-01 2nd exercise</h1>
      <button className='btn btn-dark' onClick={window['check']}>Check me</button>
     </div>
    </div>
  );
}

export default App;
