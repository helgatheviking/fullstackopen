import React from 'react';
import ReactDOM from 'react-dom';

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

const App = () => {

	const courses = [
		{
		  name: 'Half Stack application development',
		  id: 1,
		  parts: [
			{
			  name: 'Fundamentals of React',
			  exercises: 10,
			  id: 1
			},
			{
			  name: 'Using props to pass data',
			  exercises: 7,
			  id: 2
			},
			{
			  name: 'State of a component',
			  exercises: 14,
			  id: 3
			},
			{
			  name: 'Redux',
			  exercises: 11,
			  id: 4
			}
		  ]
		},
		{
		  name: 'Node.js',
		  id: 2,
		  parts: [
			{
			  name: 'Routing',
			  exercises: 3,
			  id: 1
			},
			{
			  name: 'Middlewares',
			  exercises: 7,
			  id: 2
			}
		  ]
		}
	  ]


	return (
	  <div>
		{courses.map((course, i) => {
			return (<Course key={i} course={course} />)
		})}
	  </div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));