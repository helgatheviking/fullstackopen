import React from 'react'
import CountriesList from './CountriesList';
import Country from './Country';

const Countries = ({
	countries,
	selectCountry
}) => {

	if (countries.length > 10) {
		return( <div>Too many matches found, be more precise</div> )
	} else if( countries.length === 1 ){
		let country = countries.shift()
		return( <Country country={country} /> )
	} else {
		return( <CountriesList countries={countries} selectCountry={selectCountry} /> )
	}

}
export default Countries