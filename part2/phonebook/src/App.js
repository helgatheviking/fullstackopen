import React, { useState } from 'react'
import './App.css';
import Filter from './components/Filter';
import Form from './components/Form';
import Directory from './components/Directory';

const App = () => {
  const [ people, setPeople] = useState([
	{ name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const defaultState = {
		name: '',
		number: ''
  }
  const [ formState, setFormState ] = useState(defaultState)
  const [ newFilter, setNewFilter ] = useState('');

  const updateFormState = (event) => {
	const {name, value} = event.target;
	let newFormState = {...formState, [name]: value};
	setFormState(newFormState)
  }

  const updateFilterState = (event) => {
	setNewFilter(event.target.value)
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

  const searchInputs = [
	{
		name: 'filter',
		value: newFilter,
		onChange: updateFilterState
	},
  ]

  let foundPeople = newFilter !== ''
  		? people.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)
		: people;

  return (

    <div>
      <h2>Phonebook</h2>
	  <Filter inputs={searchInputs} />
      <Form onSubmit={addPerson} inputs={inputs} />
      <Directory heading="Phone Directory" people={foundPeople} />
    </div>
  )
}

export default App
