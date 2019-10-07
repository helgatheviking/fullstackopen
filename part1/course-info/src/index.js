import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Footer total_exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
      )
}

const Content = (props) => {
    return (
        <div>
            <Part title={props.part1} num_exercises={props.exercises1} />
            <Part title={props.part2} num_exercises={props.exercises2} />
            <Part title={props.part3} num_exercises={props.exercises3} />
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