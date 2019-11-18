import React, { useState, useEffect } from 'react'
import './App.css';
import Filter from './components/Filter';
import Form from './components/Form';
import Directory from './components/Directory';
import Notification from './components/Notification';
import peopleService from './services/people';

const App = () => {

  const [ people, setPeople] = useState([]);

  const defaultState = {
		name: '',
		number: ''
  }

  const [errorMessage, setErrorMessage] = useState(null)

  const fetchPeople = () => {

	peopleService
		.getAll()
		.then(foundPeople => {
			setPeople(foundPeople)
		})
  }

  useEffect(fetchPeople, [])

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

	let foundPerson = people.find( isNameDuplicate )

	if( foundPerson ) {

		let msg = `${formState.name} is already added to the phonebook. Replace the old number with the new one?`

		if( window.confirm( msg ) ) {

			let updatedPerson = {...foundPerson, number: formState.number }

			peopleService
				.update(foundPerson.id, updatedPerson)
				.then((updatedPerson) => {
					let updatedPeople = [...people]
					setErrorMessage( `${updatedPerson.name} was updated on the server.` )
					setTimeout(() => { setErrorMessage(null) }, 5000)
					updatedPeople.splice( people.indexOf(foundPerson), 1, updatedPerson )
					setPeople( updatedPeople );
			})

		}


	} else {

		const nameObject = {
			name: formState.name,
			number: formState.number
		}

		peopleService
			.create(nameObject)
			.then((newPerson) => {
				setErrorMessage( `${newPerson.name} was added on the server.` )
				setTimeout(() => { setErrorMessage(null) }, 5000)
				setPeople(people.concat(nameObject))
				setFormState(defaultState)
			})

	}
  }

  const removePerson = (id, name) => {

	if( window.confirm(`Delete ${name}?`) ) {

		peopleService
			.remove(id)
			.then(() => {
				setErrorMessage( `${name} was removed from the server.` )
				setTimeout(() => { setErrorMessage(null) }, 5000)
				let newPeople = people.filter(person=> person.id !== id);
				setPeople(newPeople)
			})

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
      <Notification message={errorMessage} />
	  <Filter inputs={searchInputs} />
      <Form onSubmit={addPerson} inputs={inputs} />
      <Directory heading="Phone Directory" people={foundPeople} removeHandler={removePerson} />
    </div>
  )
}

export default App