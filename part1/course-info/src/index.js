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
            <Part title={props.parts[0].name} num_exercises={props.parts[0].exercises} />
            <Part title={props.parts[1].name} num_exercises={props.parts[1].exercises} />
            <Part title={props.parts[2].name} num_exercises={props.parts[2].exercises} />
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
    let total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;

    return (
          <p>Number of exercises {total}</p>
      )
}

ReactDOM.render(<App />, document.getElementById('root'))