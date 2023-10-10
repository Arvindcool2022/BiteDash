import { useContext, useState } from 'react';
import logo from '../utils/SVG/delivery app logo.svg';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';
import UserContext from '../utils/UserContext';

const LocationNames = ({ array }) =>
  array.map(place => (
    <option key={place} value={place}>
      {place}
    </option>
  ));

const Header = ({ locationList, loggedIn, loginFunc }) => {
  const statusKeyWord = loggedIn ? 'logout' : 'login';

  const onlineStatus = useOnlineStatus();
  const { LoggedInUser: userName } = useContext(UserContext);

  return (
    <header className="text-center flex justify-between overflow-hidden relative px-1 shadow-md text-lg py-5">
      <div className="items-center flex gap-2">
        <img className="w-14 absolute animate-drive" src={logo} alt="logo" />
        <h3 className="gradient-animation uppercase text-2xl font-oswald font-semibold m-0 ms-16 outline-orange-600 ">
          <Link to={'/'}>Bite Dash</Link>
        </h3>
        <select
          className="border-none text-gray-500 outline-none capitalize w-fit"
          name="location"
        >
          <LocationNames array={locationList} />
        </select>
        <p className="text-xs text-gray-500">
          {onlineStatus ? '🟢 Online' : '🔴 Offline'}
        </p>
      </div>
      <ul className="items-center cursor-pointer flex gap-3 capitalize whitespace-nowrap list-none text-black text-sm md:text-base">
        <li className=" hover:text-orange-600 transition-all duration-300 ease-in-out">
          <Link to={'/'}>home</Link>
        </li>
        <li className=" hover:text-orange-600 transition-all duration-300 ease-in-out">
          <Link to={'/about'}>about us</Link>
        </li>
        <li className=" hover:text-orange-600 transition-all duration-300 ease-in-out">
          <Link to={'/faq'}>FAQ</Link>
        </li>
        <li
          className=" hover:text-orange-600 transition-all duration-300 ease-in-out"
          onClick={e => {
            e.preventDefault();
            loginFunc();
          }}
        >
          {statusKeyWord}
        </li>
        <li>
          <button className="bg-transparent rounded-full border-none cursor-pointer text-xs mb-1 ms-8 outline outline-orange-600 outline-2 p-2 capitalize transition-all duration-300 ease-in-out hover:bg-orange-600 hover:text-white active:scale-90">
            {userName}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
