import React from 'react';


const Country = ({ foundCountry }) => {

    const languages = foundCountry.languages.map(language => <li>{language.name}</li>)


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
        </div>



    );
}

export default Country;