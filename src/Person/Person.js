import React from "react";
import Radium from "radium";
import "./Person.css";

const person = (props) => {
  const style = {
    "@media (max-width: 500px)": {
      width: "450px",
    },
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm {props.name} and my age is {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
