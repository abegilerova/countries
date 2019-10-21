import React from 'react';
import Country from './Country';


const SearchResult = ({ countries, countrySearch, setCountrySearch }) => {

    if (countrySearch === '') return null

    const found = countries.filter(country => country.name.toLowerCase().includes(countrySearch.toLowerCase()));

    if (found.length > 10) {
        return <div>Too many matches</div>
    } else if (found.length > 1) {
        return (found.map(country =>

            <div key={country.name}>
                {country.name}
                <button onClick={() => setCountrySearch(country.name)}>Show</button>
            </div>))

    } else if (found.length === 1) {
        return (
            <Country foundCountry={found[0]} />
        )
    }



}

export default SearchResult;