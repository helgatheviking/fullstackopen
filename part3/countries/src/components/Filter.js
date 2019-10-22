import React from 'react'

const Filter = ({
	value,
	onChange
}) => {
	return (
		<form>
			Find Countries
			<input value={value} onChange={onChange} />
		</form>
	)
}

export default Filter
