import React, { useState } from 'react'
import Filter from './components/Filter';
import CountriesList from './components/CountriesList';
import SingleCountry from './components/SingleCountry';
import axios from 'axios';

const App = () => {

  const [ countries, setCountry] = useState([]);

  const promise = axios.get('https://restcountries.eu/rest/v2/all')

  promise.then(response => {
	setCountry(response.data)
  })

  const [ newCountry, setNewCountry ] = useState('');

  const updateCountryState = (event) => {
	setNewCountry(event.target.value)
  }

  	let matchingCountries = newCountry !== ''
  		? countries.filter(country => country.name.toLowerCase().indexOf(newCountry.toLowerCase()) !== -1)
		: countries;

	let found;

	if( newCountry.length > 0 ) {
		if (matchingCountries.length === 0) {
			found = <div>No matches found</div>;
		} else if (matchingCountries.length === 1) {
			found = <SingleCountry country={matchingCountries.shift()} />;
		} else if (matchingCountries.length > 10) {
			found = <div>Too many matches found, be more precise</div>;
		} else {
			found = <CountriesList countries={matchingCountries} selectCountry={updateCountryState} />;
		}
	}

  return (

    <div>
	  <Filter value={newCountry} onChange={updateCountryState} />
	  {found}
    </div>
  )
}

export default App
