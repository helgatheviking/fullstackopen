import React from 'react'
import Input from './Input';

const Form = ({
	onSubmit,
	inputs
}) => {
	return (
		<form onSubmit={onSubmit}>

		{inputs.map((input, i) => {
				return (<Input key={i} input={input} />)
			})}
		<div>
			<button type="submit">add</button>
		</div>
	</form>
	)
}

export default Form
