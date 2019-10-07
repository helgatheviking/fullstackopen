import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
      )
}

const Content = (props) => {
  console.log(props);
    return (
        <div>
            {props.parts.map((part, i) => { 
                return (<Part key={i} title={part.name} num_exercises={part.exercises} />) 
            })}
        </div>
      )
}

const Part = (props) => {
    return (
          <p>
            {props.title} {props.num_exercises}
          </p>
      )
}

const Footer = (props) => {

    let total = props.parts.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue.exercises
    }, 0 )


    return (
          <p>Number of exercises {total}</p>
      )
}

ReactDOM.render(<App />, document.getElementById('root'))