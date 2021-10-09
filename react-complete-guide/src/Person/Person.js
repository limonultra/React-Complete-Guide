import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p> {/* se puede pasar la referencia de una 
            función a través de los parámetros del componente. En este caso .click es la referencia a la función switchNameHandler */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
        </div>

    )
};

export default person;