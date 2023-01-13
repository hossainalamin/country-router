import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = () => {
    const countries = useLoaderData()
    return (
        <div>
            Number of ocuntry : {countries.length}
           {countries.map(country => <li key={country.cca3}><Link to={`/country/${country.name.common}`}>{country.name.common}</Link></li>)}
        </div>
    );
};

export default Country;