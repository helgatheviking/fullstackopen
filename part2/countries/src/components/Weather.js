import React from 'react'

const Weather = ({
	city,
	weather
}) => {
	console.log('weather', weather)
	return (
		<div>
			<h3>Weather in {city}</h3>
			<ul>
			{weather.weather.map((description, i) => {
				return (<li key={i}>{description.main}</li>)
			})}
			</ul>
			<p><strong>Temperature:</strong> {weather.main.temp} C</p>
			<p><strong>Low Temperature:</strong> {weather.main.temp_min} C</p>
			<p><strong>High Temperature:</strong> {weather.main.temp_max} C</p>
			<p><strong>Wind:</strong> {weather.wind.speed} kph at {weather.wind.deg} degrees</p>
		</div>
	)

}

export default Weather
