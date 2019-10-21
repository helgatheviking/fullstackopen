import React from 'react'
import Input from './Input';

const Form = ({
	onSubmit,
	inputs
}) => {
	return (
		<div>
			<h2>Add a new person</h2>
			<form onSubmit={onSubmit}>
				{inputs.map((input, i) => {
						return (<Input key={i} input={input} />)
					})}
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</div>
	)
}

export default Form
