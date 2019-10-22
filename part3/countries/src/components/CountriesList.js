import React from 'react'
import Country from './Country';

const CountriesList = ({countries}) => {
	return (
		<div>
			<ul>
			{countries.map((country, i) => {
				return (<Country key={i} country={country} />)
			})}
			</ul>
		</div>
	)
}

export default CountriesList
