import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text="Give Feedback" />
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />

      <Header text="Statistics" />
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
    </div>
  )
}

const Header = ({ text }) => (<h2>{text}</h2>)

const Button = ({ onClick, text }) => (<button onClick={onClick}>{text}</button>)

const Statistic = ({ text, value }) => (<p>{text}: {value}</p>)

ReactDOM.render(<App />, 
  document.getElementById('root')
)