import { createContext } from 'react';

const UserContext = createContext({ LoggedInUser: 'Guest User' });

export default UserContext;
