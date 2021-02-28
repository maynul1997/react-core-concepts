import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Person</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  const personStyle={
    border: '4px solid green',
    margin: '30px'
  }
  return (
    <div style={personStyle}>
      <h1>Name : Mamun Boss</h1>
      <h3>Hero of the Year</h3>
    </div>
  )
     
}
export default App;
