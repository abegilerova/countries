import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchCountry from './components/SearchCountry';

const App = () => {


  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState('');
  const [foundCountry, setFoundCountry] = useState('');



  const all = 'https://restcountries.eu/rest/v2/all';
  useEffect(() => {
    // console.log('effect')
    axios
      .get(all)
      .then(response => {
        // console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  // console.log('render', countries.length, 'countries');



  // const displayCountryNames = () => countryNames.map(countryName => <li>{countryName}</li>);

  const handleCountrySearch = (event) => {
    setCountrySearch(event.target.value);
    console.log("country search", countrySearch);
    const countryNames = countries.map(country => country.name);
    const found = countryNames.filter(countryName => countryName.includes(countrySearch));
    setFoundCountry(found);

  }

  console.log("foundCountry", foundCountry);

  const displayFoundCountry = () => foundCountry.length > 0 ? <li>{foundCountry}</li> : <li>no search</li>;








  return (
    <div>
      <SearchCountry countrySearch={countrySearch} handleCountrySearch={handleCountrySearch} />
      <ul>
        {displayFoundCountry()}
      </ul>
    </div>
  );
}

export default App;
