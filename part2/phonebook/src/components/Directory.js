import React from 'react'
import Person from './Person';

const Directory = (props) => {
	return (
		<div>
			<h2>{props.heading}</h2>
			<ul>
			{props.people.map((person, i) => {
				return (<Person key={i} person={person} removeHandler={props.removeHandler} />)
			})}
			</ul>
		</div>
	)
}

export default Directory
