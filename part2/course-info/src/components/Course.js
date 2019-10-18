import React from 'react';

const Course = ({course}) => {
	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Summary parts={course.parts} />
		</div>
	)
}

const Header = ({name}) => {
	return (
		  <h2>{name}</h2>
	)
}

const Content = ({parts}) => {
	return (
		<div>
		{parts.map((part, i) => {
			return (<Part key={i} part={part} />)
		})}
		</div>
	)
}

const Part = ({part}) => {
	return (
		<p>
		  {part.name}: {part.exercises}
		</p>
	)
}

const Summary = ({parts}) => {

	const total = parts.reduce( (acculumator, current) => {
		return acculumator + current.exercises
	}, 0 )

	return (
		<p>total of {total} exercises</p>
	)
}

export default Course