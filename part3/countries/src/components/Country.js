import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Weather from './Weather';
import './Country.css';


const Country = ({
	country
}) => {
	const [weather, setWeather] = useState(null);
	const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.alpha2Code}&units=metric&appid=1b2e354a1dd147167d2f041db940720a`

	const fetchWeather = () => {

		axios
			.get(weatherURL)
			.then(response => {
				setWeather(response.data)
		})

	}

	useEffect(fetchWeather, [])

	const showWeather = () => {
		return (
			<Weather city={country.capital} weather={weather} />
		)
	}

	let altFlag = "Flag of" + country.name

	return (
		<div>
			<h2>{country.name}</h2>
			<p>Capital: {country.capital}</p>
			<p>Population: {country.population}</p>
			<p>Language: {country.language}</p>

			<h3>Languages</h3>
			<ul>
			{country.languages.map((lang, i) => {
				return (<li key={i}>{lang.name}</li>)
			})}
			</ul>

			<img className="flag" src={country.flag} alt={altFlag} />

			{
				weather
				? showWeather()
				: null
			}
		</div>
	)
}

export default Country
