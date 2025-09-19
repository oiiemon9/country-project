import React, { use } from 'react';
import Country from './Country';
import Loader from './Loader';

const Countrys = ({ dataPromises }) => {
  const data = use(dataPromises);
  const countryData = data.countries;

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-10">
        {countryData.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countrys;
