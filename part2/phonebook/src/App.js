import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import Directory from './components/Directory';

const App = () => {
  const [ people, setPeople] = useState([
	{
	  name: 'Arto Hellas',
	  number: '320-555-1234' 
	}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
	setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
	setNewNumber(event.target.value)
  }

  const isNameDuplicate = (person) => {
	return newName === person.name
  }

  const addPerson = ( event ) => {
	event.preventDefault();

	if( people.find( isNameDuplicate ) ) {
		alert(newName + " is already added to the phonebook")
	} else {

		const nameObject = {
			name: newName,
			number: newNumber,
			id: people.length + 1,
		}

		setPeople(people.concat(nameObject))
		setNewName('')
		setNewNumber('')
	}
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form onSubmit={addPerson} name={newName} onNameChange={handleNameChange} number={newNumber} onNumberChange={handleNumberChange} />
      <Directory heading="Phone Directory" people={people} />
    </div>
  )
}

export default App
