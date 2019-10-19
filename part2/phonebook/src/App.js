import React, { useState } from 'react'
import './App.css';
import Directory from './components/Directory';

const App = () => {
    { name: 'Arto Hellas' }
  const [ people, setPeople] = useState([
  ])
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
	setNewName(event.target.value)
  }

  const isNameDuplicate = (person) => {
	return newName === person.name
  }

  const addPerson = ( event ) => {
	event.preventDefault();

	if( people.find( isNameDuplicate ) ) {
		alert({newName} + "is already added to the phonebook")
	} else {

		const nameObject = {
			name: newName,
			id: people.length + 1,
		}

		setPeople(people.concat(nameObject))
		setNewName('')
	}
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
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
