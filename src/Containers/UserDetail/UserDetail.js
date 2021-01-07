import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../Components/UI/Spinner/Spinner";
import UserDetailContext from "../../hooks/UserDetailContext";
import "./UserDetail.css";
import API_KEY from '../../api/apiKey';

export default function UserDetail() {
  const [user, setUser] = useState(null);

  const {userId} = useContext(UserDetailContext);

  useEffect(() => {
    fetch(`https://dummyapi.io/data/api/user/${userId}`, {
      headers: {
        "app-id": API_KEY,
      },
    })
      .then((res) => res.json())
      .then( async (res) => {
        setUser(res);
        console.log("User: ", user,  "Res: ", res);
      })
      .catch((err) => console.log(err));

  },[userId]);

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age - 40;
}


  let userPage = <div className="last-touches"><Spinner /></div>;

  if (user) {
    userPage = (
      <div>
        <div className="user-detail-top-section">
          <img src={user.picture} alt="user" />
          <div>
            <h2>Name</h2>
            <p>{user.firstName}</p>
          </div>
        </div>
        <div className="locaiton-section">
            <img src="https://docs.microsoft.com/tr-tr/azure/azure-maps/media/migrate-google-maps-web-app/google-maps-marker.png" alt="location"/>
        </div>
        <div className="personal-info-section">
          <div className="gender-section">
              <p>Gender</p>
              <span>
                <i className={`fas ${user.gender === "male" ? "fa-mars" : "fa-venus"} fa-4x`}></i>
              </span>
          </div>
          <div className="age-section">
              <p>Age</p>
              <p>{getAge(user.dateOfBirth)} yo</p>
              <div className="dashboard">
                  <div>
                      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>{userPage}</div>;
}
