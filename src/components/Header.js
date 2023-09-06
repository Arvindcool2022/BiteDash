import { useState } from 'react';
import logo from '../utils/delivery app logo.svg';
import { Link } from 'react-router-dom';

const LocationNames = ({ array }) =>
  array.map(place => (
    <option key={place} className="header__options" value={place}>
      {place}
    </option>
  ));

const Header = ({ locationList }) => {
  const [login, setLogin] = useState(false);
  const statusKeyWord = login ? 'sign-out' : 'sign-in';

  return (
    <header className="header">
      <div className="header__brand">
        <img className="header__logo" src={logo} alt="logo" />
        <h3 className="header__brand-name">
          <Link to={'/'}>Bite Dash</Link>
        </h3>
        <select className="header__drop-down" name="location">
          <LocationNames array={locationList} />
        </select>
      </div>
      <ul className="header__nav-list">
        <li className="header__nav-items">
          <Link to={'/'}>home</Link>
        </li>
        <li className="header__nav-items">
          <Link to={'/about'}>about us</Link>
        </li>
        <li className="header__nav-items">
          <Link to={'/'}>Faq</Link>
        </li>
        <li className="header__nav-items" onClick={() => setLogin(!login)}>
          <Link> {statusKeyWord}</Link>
        </li>
        <li className="header__nav-items">
          <button className="header__btn">cart</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
