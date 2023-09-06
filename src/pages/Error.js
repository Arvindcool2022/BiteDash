import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        {err.status} : {err.statusText}
      </h1>
      <p>
        Sorry, either you mistyped the URL or we deleted the page either way,
        lets agree to blame this on you.😉
      </p>
      <p>
        Let take you back <Link href="/"> home </Link>
      </p>
    </div>
  );
};

export default Error;
