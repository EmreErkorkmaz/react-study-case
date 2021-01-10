import React, { useEffect, useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import Spinner from "../../Components/UI/Spinner/Spinner";
import User from "./User/User";
import "./Users.css";
import userDetailContext from '../../hooks/UserDetailContext';
import usersListContext from '../../hooks/UsersListContext';
import API_KEY from '../../api/apiKey';
import PaginationSpinner from "../../Components/UI/PaginationSpinner/PaginationSpinner";

export default function Users() {
  const [isMoreUser, setMoreUser] = useState(false);
  const {userAmount, setUserAmount} = useContext(usersListContext);

  const {usersList, setUsersListHandler} = useContext(usersListContext);
  const contextUserDetail = useContext(userDetailContext);

  useEffect(() => {
    setMoreUser(true);
    fetch(`https://dummyapi.io/data/api/user?limit=${userAmount}`, {
      headers: {
        "app-id": API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUsersListHandler(res.data);
        setMoreUser(false);
      })
      .catch((err) => console.log(err));
  }, [userAmount]);

  let usersListContent = <Spinner />;

  const onUserDetailHandler = (id) => {
    contextUserDetail.inspectUser(id);
    contextUserDetail.changeMain();
    return (<Redirect to="user-detail"/>)
  }

  if (usersList && usersList.length > 0) {
    usersListContent = (
      <ul>
        {usersList.map((user) => (
          <User key={user.id} user={user} onClickHandler={onUserDetailHandler} />
        ))}
      </ul>
    );
  }

  const moreUserHandler = () => {
      if(userAmount <= usersList.length){
        setUserAmount(userAmount + 5);
      }
  }

  return (
    <div className="users-layout">
      <div className="users-section">{usersListContent}</div>
      <div className="see-more">
        {usersList.length > 0 && (isMoreUser ? <PaginationSpinner /> : <button onClick={moreUserHandler}>See More</button>)}
      </div>
    </div>
  );
}
