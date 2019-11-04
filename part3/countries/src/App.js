import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';

const App = () => {

	const [countries, setCountries] = useState([]);
	const [query, setQuery] = useState("");
	const [matches, setMatches] = useState([]);

	const fetchCountries = () => {

		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
				setCountries(response.data)
			})

	}

	useEffect(fetchCountries, [])

	const findCountries = (event) => {
		let filter = event.target.value
		setQuery(filter); // current input value
		let matchingCountries = filter !== ''
			? countries.filter(country => country.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
			: [];
		setMatches(matchingCountries)
	}

	return (
		<div>
			<Filter value={query} onChange={findCountries} />
			<Countries countries={matches} selectCountry={findCountries} />
		</div>
	)
}

export default App