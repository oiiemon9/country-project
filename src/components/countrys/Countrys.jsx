import React, { use, useEffect, useState } from 'react';
import Country from './Country';
import Loader from './Loader';
import Popup from './Popup';

const Countrys = ({
  dataPromises,
  handelVisitedCountry,
  handelNotVisited,
  searchValue,
}) => {
  const data = use(dataPromises);
  const [countryData, setCountryData] = useState(data.countries);
  const [popupData, setPopupData] = useState(null);

  const popupDataFun = (data) => {
    setPopupData(data);
    document.getElementById('my_modal_5').showModal();
  };

  const searchCountry = data.countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue)
  );
  useEffect(() => {
    setCountryData(searchCountry);
  }, [searchValue]);

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-10">
        {countryData.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handelVisitedCountry={handelVisitedCountry}
            handelNotVisited={handelNotVisited}
            popupDataFun={popupDataFun}
          ></Country>
        ))}
      </div>
      <Popup popupData={popupData}></Popup>
    </div>
  );
};

export default Countrys;
