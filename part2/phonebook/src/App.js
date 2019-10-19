import React, { useState } from 'react'
import './App.css';
import Person from './components/Person';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
	console.log(event.target.value)
	setNewName(event.target.value)
  }

  const addName = ( event ) => {
	  event.preventDefault();
	  const nameObject = {
		name: newName,
		id: persons.length + 1,
	  }

	  setPersons(persons.concat(nameObject))
	  setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
		  			value={newName}
					onChange={handleNameChange}
				/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
		{persons.map((person, i) => {
			return (<Person key={i} person={person} />)
		})}
	  </ul>
	  <div>debug: {newName}</div>
    </div>
  )
}

export default App
