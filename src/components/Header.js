import { useContext } from 'react';
import logo from '../utils/SVG/delivery app logo.svg';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import { SWIGGY_API_URL_1, SWIGGY_API_URL_2 } from '../utils/constants';

const LocationNames = ({ array }) =>
  array.map(place => (
    <option key={place.place} value={place.geo}>
      {place.place}
    </option>
  ));

const Header = ({ locationList, loggedIn, loginFunc, setPlace, setURL }) => {
  const statusKeyWord = loggedIn ? 'logout' : 'login';
  const cartItems = useSelector(store => store.cart.items);
  const onlineStatus = useOnlineStatus();
  const { LoggedInUser: userName } = useContext(UserContext);

  const handleLocationChange = event => {
    const selectedLocation = event.target.value;

    // Find the selected location object
    const selectedLocationObject = locationList.find(
      location => location.geo === selectedLocation
    );

    if (selectedLocationObject) {
      const { place, geo } = selectedLocationObject;

      // Update the API URL and location name based on the selected location
      const updatedURL = `${SWIGGY_API_URL_1}${geo}${SWIGGY_API_URL_2}`;

      setURL(updatedURL);
      setPlace(place);
    }
  };

  return (
    <header className="text-center fixed top-0  w-full bg-white bg-opacity-75 z-10 backdrop-blur flex justify-between overflow-hidden  px-1 shadow-md text-lg py-5">
      <div className="items-center flex gap-2">
        <img className="w-14 absolute animate-drive" src={logo} alt="logo" />
        <h3 className="font-sans italic font-bold text-3xl  m-0 ms-16 gradient-animation ">
          <Link to={'/'}>Bite-Dash</Link>
        </h3>
        <select
          className="border-none text-gray-500 bg-inherit outline-none capitalize w-fit"
          name="location"
          onChange={handleLocationChange}
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
        <li className=" hover:text-orange-600 transition-all duration-300 ease-in-out">
          <Link to={'/cart'}>
            cart
            {cartItems.length > 0 && (
              <span className="text-orange-600 font-semibold">
                ({cartItems.length})
              </span>
            )}
          </Link>
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
