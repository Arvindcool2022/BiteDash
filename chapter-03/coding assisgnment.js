import React from 'react';
import ReactDOM from 'react-dom/client';
import userAvatarSVG from './chapter-03/user.svg';

const h1 = React.createElement('h1', null, 'hello h1');
const h2 = React.createElement('h2', null, 'hello h2');
const h3 = React.createElement('h3', null, 'hello h3');

const div1 = React.createElement('div', { className: 'title' }, [h1, h2, h3]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(div1);

const JSXh1 = <h1>hello h1 JSX</h1>;
// const JSXh2 = <h2>hello h2 JSX</h2>;
const JSXh2 = () => <h2>hello h2 JSX</h2>;
// const JSXh3 = <h3>hello h3 JSX</h3>;
const JSXh3 = () => <h3>hello h3 JSX</h3>;

// const div2 = <div className="title">{[JSXh1, JSXh2, JSXh3]}</div>;
const Div2 = () => (
  <div className="title">
    {JSXh1} <JSXh2></JSXh2> <JSXh3 />
  </div>
);

// console.log({ Div2 });
// console.log(<Div2 />);
// console.log(<Div2>hi</Div2>); // added to props.childern but wont render

const URL =
  'https://w7.pngwing.com/pngs/407/468/png-transparent-minecraft-logo-minecraft-logo-minecraft-ground-angle-video-game-wood.png';
const logo = <img className="header__logo" src={URL} />;
const searchBar = (
  <input
    className="header__search"
    type="search"
    placeholder="Name or ID of the server"
  />
);
const searchBtn = (
  <button className="header__btn" role="button">
    Search
  </button>
);

const userAvatar = <img className="header__user-avatar" src={userAvatarSVG} />;

const UserName = <p className="header__user-name">GuestUser123</p>;

const Search = () => (
  <div className="header_search">{[searchBar, searchBtn]}</div>
);

const UserProfile = () => (
  <div className="header__user-profile">{[userAvatar, UserName]}</div>
);

const Header = () => (
  <header className="header">
    {logo}
    <Search />
    <UserProfile />
  </header>
);

const FinalComp = () => (
  <div>
    <Header />
    <Div2 />
  </div>
);

root.render(<FinalComp />);
