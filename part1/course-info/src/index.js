import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Footer total_exercises={part1.exercises + part2.exercises + part3.exercises} />
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
            <Part title={props.part1.name} num_exercises={props.part1.exercises} />
            <Part title={props.part2.name} num_exercises={props.part2.exercises} />
            <Part title={props.part3.name} num_exercises={props.part3.exercises} />
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
    return (
          <p>Number of exercises {props.total_exercises}</p>
      )
}

ReactDOM.render(<App />, document.getElementById('root'))