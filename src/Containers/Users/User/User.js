import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";

export default function User({ user, onClickHandler }) {
  const [age, setAge] = useState(0);

  useEffect(() => {
    setAge(Math.floor(Math.random() * 22) + 18);
  }, []);

  return (
    <React.Fragment>
      <li className="list-item" key={user.id}>
        <img src={user.picture} alt="user" />
        <p>{user.firstName + ", " + age}</p>
        <Link
          className="link"
          to="user-detail"
          onClick={() => onClickHandler(user.id)}
        >
          <div><i className="fas fa-chevron-right icon" /></div>
        </Link>
      </li>
    </React.Fragment>
  );
}
