import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetail = () => {
    const countryName = useLoaderData()[0];
    console.log(countryName);
    return (
        <div>
            {countryName.name.common}
            
        </div>
    );
};

export default CountryDetail;