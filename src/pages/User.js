import { useState } from 'react';

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [textColor, setTextColor] = useState('red');
  return (
    <>
      <h2>{name} func</h2>
      <p>{location}</p>
      <h3 style={{ color: textColor }}>count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : null)}>
        decrease count
      </button>
      <button onClick={() => setTextColor('black')}>black count</button>
      <button onClick={() => setTextColor('green')}>green count</button>
      <button onClick={() => setTextColor('red')}>red count</button>
    </>
  );
};

export default User;
