import React from 'react';

const UserDetailContext = React.createContext({userId: null, inspectUser: () => {}, userDetail: null, setUserDetail: () => {},isMain: null, changeMain: () => {}});

export default UserDetailContext;