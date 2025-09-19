import React, { useState } from 'react';

const Popup = ({ popupData }) => {
  let countryCode = {};
  if (popupData !== undefined && popupData !== null) {
    countryCode = Object.keys(popupData?.currencies?.currencies);
  }

  // const key = Object.keys(countryCode);
  console.log(popupData?.currencies?.currencies[countryCode[0]]);

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">{popupData?.name?.common}</h3>
          <div className="flex justify-center">
            <img
              className="max-w-72 w-full"
              src={popupData?.flags?.flags?.png}
              alt=""
            />
          </div>
          <div className="mt-5">
            <p className="font-bold">{popupData?.name?.official}</p>
            <p className="text-sm  text-gray-600">
              {' '}
              Country Code: {popupData?.ccn3?.ccn3}
            </p>
            <p className="text-sm  text-gray-600">
              Currencies:{' '}
              {popupData?.currencies?.currencies[countryCode[0]].name}(
              {popupData?.currencies?.currencies[countryCode[0]].symbol})
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Popup;

// {
//     "name": {
//         "common": "Jamaica",
//         "official": "Jamaica"
//     },
//     "ccn3": {
//         "ccn3": "388"
//     },
//     "currencies": {
//         "currencies": {
//             "JMD": {
//                 "name": "Jamaican dollar",
//                 "symbol": "$"
//             }
//         }
//     },
//     "capital": {
//         "capital": [
//             "Kingston"
//         ]
//     },
//     "region": {
//         "region": "Americas"
//     },
//     "languages": {
//         "languages": {
//             "eng": "English",
//             "jam": "Jamaican Patois"
//         }
//     },
//     "area": {
//         "area": 10991
//     },
//     "cca3": {
//         "cca3": "JAM"
//     },
//     "population": {
//         "population": 2961161
//     },
//     "continents": {
//         "continents": [
//             "North America"
//         ]
//     },
//     "flags": {
//         "flags": {
//             "png": "https://flagcdn.com/w320/jm.png",
//             "svg": "https://flagcdn.com/jm.svg",
//             "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
//         }
//     }
// }
