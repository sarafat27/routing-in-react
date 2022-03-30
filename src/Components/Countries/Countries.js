import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h2>Let's visit different countries </h2>
            <ul>
                {
                    countries.map(country => <li
                        key={country.cca3}
                        style={{ marginBottom: '50px', listStyle: 'none' }}>
                        <Link to={`/country/${country.name.common}`}
                        >{country.name.common}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default Countries;