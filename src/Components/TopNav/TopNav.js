import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";
import userDetailContext from "../../hooks/UserDetailContext";

export default function TopNav() {
  const context = useContext(userDetailContext);

  let topNavigation = (
    <div className="topNav-section">
      <div className="topNav"><Link style={{ textDecoration: "none" }} to="/">
        <h1 className="profiles">PROFILES</h1>
      </Link>
      <div className="menu-section">
        <div className="Path-2"></div>
        <div className="Path-2"></div>
        <div className="Path-2"></div>
      </div></div>
    </div>
  );

  if (!context.isMain) {
    topNavigation = (
      <div className="user-detail-topnav">
        <Link className="toplink" to="/" onClick={context.changeMain}>
          <div>
            <i className="fas fa-arrow-left icon-back"></i>
          </div>
        </Link>
        <h1 className="my-profiles">MY PROFILE</h1>
      </div>
    );
  }

  return (
      <React.Fragment>
          {topNavigation}
      </React.Fragment>
  );
}
