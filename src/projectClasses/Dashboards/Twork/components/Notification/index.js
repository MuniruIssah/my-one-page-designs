import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "./styles.scss";
const Notification = ({ active }) => {
  return (
    <div className="notification">
      <FontAwesomeIcon icon={faBell} className="notificationIcon" />
      {active && <div className="badge"></div>}
    </div>
  );
};

export default Notification;
