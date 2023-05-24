import NavBar from '../component/NavBar'
import Card from '../component/card'
import { SetStateAction, useState, useEffect } from 'react';
import countriesData from '../data/data.json';
import './home.css'

function homePage() {
  const countriesLimit = 100;
  const [name, setName] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const nameHandle = (e: { target: { value: SetStateAction<string>; }; }) => {
    setName(e.target.value);
  }
  const handleRegionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedRegion(e.target.value);
  };
  // Filter countries based on name and optional region
  const filteredCountries = countriesData.filter((country) => {
    const nameMatch = country.name.toLowerCase().includes(name.toLowerCase());
    const regionMatch = country.region.toLowerCase().includes(selectedRegion.toLowerCase());
    if (selectedRegion === 'Filter by Region') {
      return nameMatch;
    } else {
      return nameMatch && regionMatch;
    }
  });
  return (
    <div>
      <NavBar />
      <div className="searchAndFilter">
        <div className="search">
          <i className="fas fa-search"></i>
          <input type="text" name='name' value={name} placeholder="Search for a country..." onChange={nameHandle} />
        </div>
        <div className="filter">
          <select name="filter" id="filter" value={selectedRegion} onChange={handleRegionChange}>
            <option value="Filter by Region">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="cardContainer">
        {filteredCountries.length > 0 ? (
          filteredCountries.slice(0, countriesLimit).map((data, index) => (
            <Card key={index} flag={data.flag} name={data.name} population={data.population} region={data.region} capital={data.capital} />
          ))
        ) : (
          <p>Country not found😀🤪</p>
        )}
      </div>

    </div>
  )
}

export default homePage