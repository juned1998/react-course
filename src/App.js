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

  console.log(otherValue);


  const switchNameHandler = () => {
    // alert("hello");
    // DON'T DO THIS  this.state.persons[0].name = "Rock";
    setPersonState({
      persons: [
        { name : "Jerry", age: 21 },
        { name : "Tom", age: 22 },
        { name : "Chandler", age: 25 },
      ],
    });

    changeOtherValue("NEw Other Value");
  }
  
  return (
    
    <div className="App">
      <h1>Hello</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby is reading books.</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
    //React.createElement('div', {className:"App"}, React.createElement('h1',null, 'he12llo'))
  );
  
}

export default App;



