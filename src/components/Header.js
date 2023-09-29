import { useState } from 'react';
import logo from '../utils/SVG/delivery app logo.svg';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';

const LocationNames = ({ array }) =>
  array.map(place => (
    <option key={place} className="header__options" value={place}>
      {place}
    </option>
  ));

const Header = ({ locationList }) => {
  const [login, setLogin] = useState(false);
  const statusKeyWord = login ? 'sign-out' : 'sign-in';
  const onlineStatus = useOnlineStatus();

  return (
    <header className="text-center flex justify-between overflow-hidden relative px-1 shadow-md text-lg py-5">
      <div className="items-center flex gap-2">
        <img className="w-14 absolute header__logo" src={logo} alt="logo" />
        <h3 className="text-orange-600 oswald text-2xl font-mono font-semibold m-0 ms-16 outline-orange-600 capitalize">
          <Link to={'/'}>Bite Dash</Link>
        </h3>
        <select
          className="border-none text-gray-500 outline-none capitalize w-fit"
          name="location"
        >
          <LocationNames array={locationList} />
        </select>
        <p style={{ fontSize: '12px' }}>
          {onlineStatus ? '🟢 Online' : '🔴 Offline'}
        </p>
      </div>
      <ul className="items-center cursor-pointer flex gap-3 capitalize whitespace-nowrap list-none">
        <li className="header__nav-items transition-all duration-300 ease-in-out">
          <Link to={'/'}>home</Link>
        </li>
        <li className="header__nav-items transition-all duration-300 ease-in-out">
          <Link to={'/about'}>about us</Link>
        </li>
        <li className="header__nav-items transition-all duration-300 ease-in-out">
          <Link to={'/'}>Faq</Link>
        </li>
        <li
          className="header__nav-items transition-all duration-300 ease-in-out"
          onClick={() => setLogin(!login)}
        >
          <Link> {statusKeyWord}</Link>
        </li>
        <li className="header__nav-items transition-all duration-300 ease-in-out">
          <button className="header__btn bg-transparent rounded border-none cursor-pointer text-lg mb-1 ms-8 outline outline-orange-600 py-1 px-3 capitalize transition-all duration-300 ease-in-out hover:bg-orange-600 hover:text-white active:scale-90">
            cart
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
