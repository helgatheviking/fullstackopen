import React from 'react'
import Input from './Input';

const Filter = ({
	inputs
}) => {
	return (
		<form>
			{inputs.map((input, i) => {
				return (<Input key={i} input={input} />)
			})}
		</form>
	)
}

export default Filter