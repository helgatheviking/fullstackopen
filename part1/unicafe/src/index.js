import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Header = ({ text }) => (<h2>{text}</h2>)
const Button = ({ onClick, text }) => (<button className={text.toLowerCase()} onClick={onClick}>{text}</button>)
const Statistic = ({ text, value }) => (<p>{text}: {value}</p>)

const Statistics = ( {heading, stats} ) => {

    // Destructuring see: https://amido.com/blog/using-es6-destructuring-in-your-react-components/
  const {
    good,
    bad,
    neutral
  } = stats;

  const getTotal = () => {
    return bad + good + neutral;
  }
  const getAverage = () => {
    return getTotal() / 3;
  }
  const getPercentPositive = () => {
    return good > 0 ? good * 100 / getTotal() : 0;
  }

  return (
    <div>
      <Header text={heading} />
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="Average" value={getAverage()} />
      <Statistic text="Positive" value={getPercentPositive() + "%"} />
    </div>
  )

}

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
  const stats = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <div>
      <Header text="Give Feedback" />
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />

      <Statistics heading="Statistics" stats={stats} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)