import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Weather from './Weather'

const secrets = require('../secrets.json');

const Country = ({ foundCountry }) => {

    const languages = foundCountry.languages.map(language => <li key={language.name}>{language.name}</li>)
    const [weather, setWeather] = useState(null);

    const weatherHook = () => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${secrets.apixu}&query=${foundCountry.capital}&units=f`)
            .then(response => {
                setWeather(response.data);
            })
    }


    useEffect(weatherHook, [])

    return (
        <div>
            <h1>{foundCountry.name}</h1>
            <p> capital {foundCountry.capital}</p>
            <p>population {foundCountry.population}</p>
            <h3>languages</h3>
            <ul>
                {languages}
            </ul>
            <img src={foundCountry.flag} alt={`counrty flag of ${foundCountry.name}`} width="200" />
            <Weather weather={weather} />
        </div>
    );
}

export default Country;