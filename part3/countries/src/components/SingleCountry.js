import React from 'react'
import './Country.css';

const SingleCountry = ({country}) => {
	const altFlag = "Flag of" + country.name

	return (
		<div>
			<h2>{country.name}</h2>
			<p>Capital: {country.capital}</p>
			<p>Population: {country.population}</p>

			<h3>Languages</h3>
			<ul>
			{country.languages.map((lang, i) => {
				return (<li key={i}>{lang.name}</li>)
			})}
			</ul>

			<img className="flag" src={country.flag} alt={altFlag} />
		</div>
	)
}

export default SingleCountry
