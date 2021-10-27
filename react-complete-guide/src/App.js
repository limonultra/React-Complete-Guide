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
    showPersons: false

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

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render () {

    const buttonStyle = { //es complicado hacer que cambie el hovering con los inline styles, y hay aún más restricciones
      backgroundColor: 'white',
      marginBottom: '16px',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person => { //usamos map para hacer el loop con los componentes
            return <Person
            name= {person.name}
            age= {person.age}/>
          })}

          {/* <Person //ESTO ES COMO LO HACÍAMOS ANTES
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} /> */}
          </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={buttonStyle}
        onClick={this.switchNameHandler.bind(this,'Ultimate Manuel')}>Switch Name</button>
        <button 
        style={buttonStyle}
        onClick={this.togglePersonsHandler}> Mostrar personas 
        </button>
        {persons} {/*Manera elegante de retornar los componentes Persona*/}

        {/* { this.state.showPersons ? //OTRA MANERA DE HACER LOS CONDICIONALES: si esta expresión está a true, 
        renderiza lo que hay detrás del ?
        <div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        </div> : null //si es false, no hagas nada
        } */}

      </div>
    )
  }

}
export default App;
