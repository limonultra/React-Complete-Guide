import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Person from './Person/Person.js';

class App extends Component{

  state = { // es una property de la clase. 
    persons : [
      {name : 'Maximilian', age: 28},
      {name : 'Manu', age: 29},
      {name : 'Stephanie', age: 27}
    ],
    otherState: 'some other value'
  }


switchNameHandler = (newName) => { //es un método de la clase. Le asignamos una función para que se convierta en un método. 
  this.setState ({ //el this.setState solo se usa en estos componentes de tipo class.
                  // Solo cambia el valor de aquello que se sobreescribe.
    persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ] 
  })
}

nameChangeHandler = (event) => { //Añadimos la palabra Handler como convención para que se sepa que gestiona un tipo de evento
  this.setState ({  //pasamos un objeto event que recibe los valores del input mediante el event.target
    persons: [
      {name: 'Maximilian', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 27}
    ] 
  })
}

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
    };
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this,'Ultimate Manuel')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={()=>this.switchNameHandler('Esto es un nuevo nombre')} 
          changed={this.nameChangeHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    )
  }

}
export default App;
