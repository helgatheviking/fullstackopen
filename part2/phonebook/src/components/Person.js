import React from 'react'

const Person = ({person, removeHandler}) => {
	return (
	  <li>{person.name}: {person.number} <button value={person.id} onClick={() => removeHandler(person.id, person.name)}>Delete</button></li>
	)
}

export default Person