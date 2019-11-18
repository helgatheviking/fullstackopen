import React from 'react'

const Person = ({person, removeHandler}) => {
	return (
	  <li>{person.name}: {person.number} <button onClick={() => removeHandler(person.id, person.name)}>Delete</button></li>
	)
}

export default Person