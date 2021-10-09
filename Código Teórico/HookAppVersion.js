import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

    const [personState, setPersonState] = useState({ //los useState devuelven dos elementos en un array: el estado (ex: personState)
                                                    //y la función (ex: setPersonState) para cambiar el estado.
        persons: [
         {name : 'Maximilian', age: 28},
         {name : 'Manu', age: 29},
         {name : 'Stephanie', age: 27}
        ]
    });

    const [otherState, setOtherState] = useState('some other value'); //se puede llamar a useState tantas veces como se quiera

    console.log(personState, otherState);

    const switchNameHandler = () => {
        setPersonState ({
          persons: [
            {name: 'Maximilian', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 27}
          ]
        })
      }

    return (
        <div className= "App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        </div>
    )
}
