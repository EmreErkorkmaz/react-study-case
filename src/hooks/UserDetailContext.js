import React from 'react';

const UserDetailContext = React.createContext({userId: null, inspectUser: () => {}, cleanInspectUser: () => {}, isMain: null, changeMain: () => {}});

export default UserDetailContext;