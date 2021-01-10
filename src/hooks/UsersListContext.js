import React from 'react';

const UsersListContext = React.createContext({usersList: [], setUserListHandler: () => {}, userAmount: null, setUserAmount: () => {}});

export default UsersListContext;