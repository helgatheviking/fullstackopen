import React from 'react'

const Country = ({
	country,
	selectCountry
}) => {
	return (
	  <li>{country.name}<button value={country.name} onClick={selectCountry}>Show</button></li>
	)
}

export default Country
