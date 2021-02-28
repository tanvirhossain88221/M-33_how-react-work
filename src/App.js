import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const nayoks = ['Jasim' , 'Deepjol', 'BappaRaj','Jasim' , 'Deepjol', 'BappaRaj'] only array.
  const nayoks = [{name: 'Jasim' , age: 56 }, { name: 'Deepjol', age: 65}, {name:'BappaRaj', age:15}];

  return (
    <div className="App">

      <MovieCounter></MovieCounter>
      {
      // nayoks.map(hero => <Nayok name= {hero}></Nayok>) for only array
      nayoks.map(hero => <Nayok name= {hero.name} age={hero.age}></Nayok>)

      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(1);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick = {handleClick}>Add Movie</button>
      <h5>Number of Movies: {count}  </h5>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 7}></MovieDisplay>
      <MovieDisplay movies={count  - 3}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      {/* <Nayok movies= {count}></Nayok> */}
    </div>
  )
}

function MovieDisplay(props) {
  return <h3>Movies i have acted: {props.movies}</h3>
}

function Nayok(props) {
  const nayokStyle ={
    border: '2px solid purple',
    margin: '20px'
  }
  return (
  <div style={nayokStyle}> 
    <h1>Ami Nayak- {props.name}</h1>
    <h3>I have done 2 Movies {props.age || 30} years</h3> 
    {/* ||30 or ||500 its a default value */} 
    {/* <h3>test {props.movies || 2}</h3> */}

  </div>)
}                                                                                                                    
export default App;