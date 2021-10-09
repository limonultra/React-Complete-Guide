import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{

  state = { // es una property de la clase. 
    persons : [
      {name : 'Maximilian', age: 28},
      {name : 'Manu', age: 29},
      {name : 'Stephanie', age: 27}
    ],
    otherState: 'some other value'
  }


switchNameHandler = () => { //es un método de la clase. Le asignamos una función para que se convierta en un método. 
  this.setState ({ //el this.setState solo se usa en estos componentes de tipo class.
                  // Solo cambia el valor de aquello que se sobreescribe.
    persons: [
      {name: 'Maximilian', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ] 
  })
}

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      </div>
    )
  }

}
export default App;
