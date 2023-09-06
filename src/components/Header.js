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
        <h3 className="header__brand-name">Bite Dash</h3>
        <select className="header__drop-down" name="location">
          <LocationNames array={locationList} />
        </select>
      </div>
      <ul className="header__nav-list">
        <li className="header__nav-items">
          <i className="bi bi-search"></i>
          search
        </li>
        <li className="header__nav-items">
          <i className="bi bi-percent"></i>
          <Link to={'/'}>offer</Link>
        </li>
        <li className="header__nav-items">
          <i className="bi bi-info-circle"></i>
          <Link to={'/about'}>help</Link>
        </li>
        <li className="header__nav-items" onClick={() => setLogin(!login)}>
          <i className="bi bi-person"></i>
          {statusKeyWord}
        </li>
        <li className="header__nav-items">
          <button className="header__btn">
            <i className="bi bi-cart"></i>cart
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
