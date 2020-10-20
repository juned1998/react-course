import React, {useState} from "react";
import Person from "./Person/Person";
import "./App.css";

const App = props => {
  const [personsState, setPersonState] = useState({
    persons : [
      { name : 'Max', age: 20},
      { name : 'John', age: 29},
      { name : 'Stephanie', age: 30}
    ]
  });

  const [otherValue, changeOtherValue] = useState("Some Value");
  const [showPersonsState, togglePersonState] = useState(false);

  console.log(otherValue);


  const switchNameHandler = (newName) => {
    // alert("hello");
    // DON'T DO THIS  this.state.persons[0].name = "Rock";
    setPersonState({
      persons: [
        { name : newName, age: 21 },
        { name : "Tom", age: 22 },
        { name : "Chandler", age: 25 },
      ],
    });

    changeOtherValue("NEw Other Value");
  }

  const nameChangeHandler = (event) => {
    
    setPersonState({
      persons: [
        { name : event.target.value, age: 21 },
        { name : "Tom", age: 22 },
        { name : "Chandler", age: 25 },
      ],
    });
  }

  const togglePersonDiv = () => { 
    togglePersonState(!showPersonsState);
    console.log(showPersonsState);
  }

  const style = {
    border: '1px solid blue',
    backgroundColor: 'white',
    font: 'inherit',
    padding: '8px',
    cursor: 'pointer',
  }

  let persons = null;
  if(showPersonsState){
    persons = (
      <div>
        {personsState.persons.map( person => {
          return <Person name = {person.name} age={person.age}></Person>
        })}
      </div>
    ) 
  }
  
  return (    
    <div className="App">
      <h1>Hello</h1>
      <button style={style} onClick={() => switchNameHandler("New Name")}>Switch Name</button>
      <button style={style} onClick={togglePersonDiv}>Toggle Persons Div</button>
      {persons}
    </div>
    //React.createElement('div', {className:"App"}, React.createElement('h1',null, 'he12llo'))
  );
  
}  

export default App;



