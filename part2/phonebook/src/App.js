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

  const defaultState = {
		name: '',
		number: ''
  }
  const [ formState, setFormState ] = useState(defaultState)

  const updateFormState = (event) => {
	const {name, value} = event.target;
	let newFormState = {...formState, [name]: value};
	setFormState(newFormState)
  }

  const isNameDuplicate = (person) => {
	return formState.name === person.name
  }

  const addPerson = ( event ) => {
	event.preventDefault();

	if( people.find( isNameDuplicate ) ) {
		alert(formState.name + " is already added to the phonebook")
	} else {

		const nameObject = {
			name: formState.name,
			number: formState.number,
			id: people.length + 1,
		}

		setPeople(people.concat(nameObject))
		setFormState(defaultState)
	}
  }

  const inputs = [
	{
		name: 'name',
		value: formState.name,
		onChange: updateFormState
	},
	{
		name: 'number',
		value: formState.number,
		onChange: updateFormState
	},

  ]

  return (
    <div>
      <h2>Phonebook</h2>
      <Form onSubmit={addPerson} inputs={inputs} />
      <Directory heading="Phone Directory" people={people} />
    </div>
  )
}

export default App