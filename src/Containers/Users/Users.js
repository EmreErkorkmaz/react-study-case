import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Spinner from "../../Components/UI/Spinner/Spinner";
import User from "./User/User";
import "./Users.css";
import userDetailContext from '../../hooks/UserDetailContext';
import API_KEY from '../../api/apiKey';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userAmount, setUserAmount] = useState(5);

  const context = useContext(userDetailContext);

  useEffect(() => {
    fetch(`https://dummyapi.io/data/api/user?limit=${userAmount}`, {
      headers: {
        "app-id": API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, [userAmount]);

  let usersList = <Spinner />;

  const onUserDetailHandler = (id) => {
    context.inspectUser(id);
    context.changeMain();
    return (<Redirect to="user-detail"/>)
  }

  if (users && users.length > 0) {
    usersList = (
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} onClickHandler={onUserDetailHandler} />
        ))}
      </ul>
    );
  }

  const moreUserHandler = () => {
      if(userAmount <= users.length){
        setUserAmount(userAmount + 5);
      }
  }

  return (
    <div className="users-layout">
      <div className="users-section">{usersList}</div>
      <div className="see-more">
        {users.length > 0 && <button onClick={moreUserHandler}>See More</button>}
      </div>
    </div>
  );
}
