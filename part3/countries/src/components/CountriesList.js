import React from 'react'
import ListItem from './ListItem';

const CountriesList = ({
	countries,
	selectCountry
}) => {

	return (
		<div>
			<ul>
			{countries.map((country, i) => {
				return (<ListItem key={i} item={country} selectListItem={selectCountry} />)
			})}
			</ul>
		</div>
	)
}

export default CountriesList
