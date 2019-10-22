import React from 'react'
import Country from './Country';

const CountriesList = ({
	countries,
	selectCountry
}) => {
	return (
		<div>
			<ul>
			{countries.map((country, i) => {
				return (<Country key={i} country={country} selectCountry={selectCountry} />)
			})}
			</ul>
		</div>
	)
}

export default CountriesList
