import React, { useState } from 'react';


const SearchCountry = ({ countrySearch, handleCountrySearch }) => {

    return (
        <div>
            <form>
                find countries <input value={countrySearch} onChange={handleCountrySearch} ></input>
            </form>
        </div>
    );
}

export default SearchCountry;