import logo from '../utils/delivery app logo.svg';
import { LOCATIONS } from '../utils/constants';

const LocationNames = ({ array }) =>
  array.map(place => (
    <option key={place} className="header__options" value={place}>
      {place}
    </option>
  ));

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <img className="header__logo" src={logo} alt="logo" />
        <h3 className="header__brand-name">Bite Dash</h3>
        <select className="header__drop-down" name="location">
          <LocationNames array={LOCATIONS} />
        </select>
      </div>
      <ul className="header__nav-list">
        <li className="header__nav-items">
          <i className="bi bi-search"></i>
          search
        </li>
        <li className="header__nav-items">
          <i className="bi bi-percent"></i>
          offer
        </li>
        <li className="header__nav-items">
          <i className="bi bi-info-circle"></i>
          help
        </li>
        <li className="header__nav-items">
          <i className="bi bi-person"></i>
          sign-in
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
