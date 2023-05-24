import React from 'react'
import './country-details.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import countriesData from '../data/data.json';
function viewMorePage() {
  const name = useParams();
  const country = countriesData.find((country) => country.name.toLowerCase() === name.name.toLowerCase());
  console.log(country)
  return (
    <div className='country-details'>
      <div className="backBtn">
        <Link to="/">
          <button><i className="fas fa-long-arrow-alt-left"></i>Back</button>
        </Link>
      </div>
      <div className="country-details-content">
        <div className="country-details-flag">
          <img src={country?.flags.png} alt="" />
        </div>
        <div className="country-details-info">
          <h2>Country Name</h2>
          <div className="country-details-info-content">
            <div className="country-details-info-left">
              <p><span>Native Name:</span>{country?.name} </p>
              <p><span>Population:</span>{country?.population} </p>
              <p><span>Region:</span> {country?.region}</p>
              <p><span>Sub Region:</span>{country?.subregion} </p>
              <p><span>Capital:</span> {country?.capital}</p>
            </div>
            <div className="country-details-info-right">
              <p><span>Top Level Domain:</span>{country?.topLevelDomain} </p>
              <p><span>Currencies:</span>{country?.currencies.name} </p>
              <p><span>Languages:</span> {country?.languages.name}</p>
              <p><span>Borders:</span> </p>
              <p><span>Area:</span> {country?.area}</p>
              <p><span>Time Zone:</span>{country?.timezones} </p>
              <p><span>Calling Code:</span> {country?.callingCodes}</p>
              <p><span>Region:</span>{country?.region} </p>
            </div>
            <div className="boarderCountries">
              <h2>Boarder Countries</h2>
              <div className="boarderCountries-content">
                <div className="boarderCountries-info">
                  <p>{country?.borders}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default viewMorePage