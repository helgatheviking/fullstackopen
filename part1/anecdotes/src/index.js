import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Header = ({ text }) => (<h2>{text}</h2>)
const Button = ({ onClick, text }) => (<button className={text.replace(" ", "-").toLowerCase()} onClick={onClick}>{text}</button>)

const MostVotes = ({votes, anecdotes}) => {

    const mostVotesValue = Math.max(...votes)
    const mostVotesIndex = votes.indexOf(mostVotesValue)

    if( mostVotesValue > 0 ) {

        return (

            <div>
                <Header text="Anecdote with the Most Votes" />
                <p>{anecdotes[mostVotesIndex]}</p>
                <p>Has {votes[mostVotesIndex]} votes</p>
            </div>
        
        )
  }

  return (

    <p>No votes yet.</p>

    )
}

const App = ({anecdotes}) => {

    const [selected, setSelected] = useState(0)
    const [votes, setVoteCount] = useState(new Array(anecdotes.length).fill(0))

    const handleNextClick = () => {
        setSelected(Math.floor((Math.random() * anecdotes.length)))
    }
    const handleVoteClick = () => {
        const newVoteCount = [...votes]
        newVoteCount[selected] += 1
        setVoteCount(newVoteCount)
      }

    return (

        <div>
        
            <div>
                <Header text="Anecdote of the Day" />
                <p>{anecdotes[selected]}</p>
                <p>Has {votes[selected]} votes</p>
                <Button onClick={handleVoteClick} text="Vote" />
                <Button onClick={handleNextClick} text="Show Next Anecdote" />
            </div>

            <MostVotes votes={votes} anecdotes={anecdotes} />

        </div>

    )
  }
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )