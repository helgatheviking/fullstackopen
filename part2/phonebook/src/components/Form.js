import React from 'react'

const Form = ({
	onSubmit,
	name,
	onNameChange,
	number,
	onNumberChange
}) => {
	return (
		<form onSubmit={onSubmit}>
			<div>
			name: <input
					name='name'
					value={name}
					onChange={onNameChange}
				/>
		</div>
		<div>
			number: <input
					name='number'
					value={number}
					onChange={onNumberChange}
				/>
		</div>
		<div>
			<button type="submit">add</button>
		</div>
	</form>
	)
}

export default Form