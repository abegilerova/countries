import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchCountry from './components/SearchCountry';
import SearchResult from './components/SearchResult';


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

  const handleCountrySearch = (event) => {
    setCountrySearch(event.target.value);
  }

  console.log("foundCountry", foundCountry);

  return (
    <div>
      <SearchCountry countrySearch={countrySearch} handleCountrySearch={handleCountrySearch} />
      <SearchResult countries={countries} countrySearch={countrySearch} setCountrySearch={setCountrySearch} />
    </div>
  );
}

export default App;
