import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import TopNav from '../../Components/TopNav/TopNav';
import UserDetailContext from '../../hooks/UserDetailContext';
import Users from '../Users/Users';
import UserDetail from '../UserDetail/UserDetail';
import './Layout.css';

export default function Layout() {

    const [userId, setUserId] = useState();
    const [isMain, setIsMain] = useState(true);

    const inspectUser = (id) => {
        setUserId(id);
    }

    const cleanInspectUser = () => {
        setUserId(null);
    }

    const changeMain = () => {
        setIsMain(prevState => !prevState);
    }

    return (
        <div className='layout'>
            <UserDetailContext.Provider value={{userId: userId, inspectUser: inspectUser, cleanInspectUser: cleanInspectUser, isMain: isMain, changeMain: changeMain}}>
            <TopNav/>
            <Switch>
                {userId ? <Route component={UserDetail} path='/user-detail' exact/> : null}
                <Route component={Users} path='/'/>
            </Switch>
            </UserDetailContext.Provider>
        </div>
    )
}
