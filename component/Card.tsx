import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
function card(props: { flag: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; population: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; region: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; capital: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <Link to={`/country-details/${props.name}`}>
    <div className='card'>
      <div className='cardImg'>
        <img src={props.flag} />
      </div>
      <div className='cardInfo'>
        <h3>{props.name}</h3>
        <p><span>Population:</span> {props.population}</p>
        <p><span>Region:</span> {props.region}</p>
        <p><span>Capital:</span> {props.capital}</p>
      </div>
    </div>
    </Link>
  )
}

export default card