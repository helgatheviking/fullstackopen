import React, { useState } from 'react'
import './App.css';
import Directory from './components/Directory';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
	setNewName(event.target.value)
  }

  const isNameDuplicate = (person) => {
	return newName === person.name
  }

  const addName = ( event ) => {
	event.preventDefault();

	if( persons.find( isNameDuplicate ) ) {
		alert({newName} + "is already added to the phonebook")
	} else {

		const nameObject = {
			name: newName,
			id: persons.length + 1,
		}

		setPersons(persons.concat(nameObject))
		setNewName('')
	}
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
      <Directory heading="Phone Directory" people={people} />
    </div>
  )
}

export default App
