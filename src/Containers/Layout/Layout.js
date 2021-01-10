import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import TopNav from '../../Components/TopNav/TopNav';
import UserDetailContext from '../../hooks/UserDetailContext';
import Users from '../Users/Users';
import UserDetail from '../UserDetail/UserDetail';
import './Layout.css';
import UsersListContext from '../../hooks/UsersListContext';

export default function Layout() {

    const [usersList, setUsersList] = useState([]);
    const [userAmount, setUserAmount] = useState(5);
    const [userId, setUserId] = useState(null);
    const [userDetail, setUserDetail] = useState(null);
    const [isMain, setIsMain] = useState(true);

    const changeMain = () => {
        setIsMain(prevState => !prevState);
    }

    return (
        <div className='layout'>
            <UsersListContext.Provider value={{usersList: usersList, setUsersListHandler: setUsersList, userAmount: userAmount, setUserAmount: setUserAmount}}>
              <UserDetailContext.Provider value={{userId: userId, inspectUser: setUserId, userDetail: userDetail, setUserDetail:setUserDetail, isMain: isMain, changeMain: changeMain}}>
                <TopNav/>
                <Switch>
                    {userId ? <Route component={UserDetail} path='/user-detail' exact/> : null}
                    <Route component={Users} path='/'/>
                </Switch>
              </UserDetailContext.Provider>
            </UsersListContext.Provider>
        </div>
    )
}
