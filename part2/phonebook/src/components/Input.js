import React from 'react'

const Input = ({input}) => {
	return (
		<div>
		{input.name}: <input
					name={input.name}
					value={input.value}
				    onChange={input.onChange}
			  />
		</div>
	)
}

export default Input
