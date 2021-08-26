import React from "react";
import "./styles.scss";
import { BellOutlined,CaretDownFilled ,UserOutlined} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
const Header = () => {
  return (
    <header className="uiDashboardHeader">
      <HeaderIcon />
      <HeaderExtras />
    </header>
  );
};

export default Header;

// Some small sub components

// The Header Icon
const HeaderIcon = () => {
  return (
    <div className="uiDashboardHeaderIcon">
      <span>UI</span>
      <span>DASHBOARD</span>
    </div>
  );
};

// Header Extras
const HeaderExtras = () => {
  return (
    <div className="uiDashboardHeaderExtras">
      <Notification />
      <Profile />
    </div>
  );
};

// Header Extras Components
const Notification = () => {
  return (
    <div>
      <BellOutlined style={{fontSize:19,color:'grey'}} />
    </div>
  );
};

const Profile = () => {
  return <div className="uiDashboardHeaderExtrasProfile">
    <Avatar size="small" style={{marginRight:10}} icon={<UserOutlined/>} />
    <span>Baba Issah</span>
    <CaretDownFilled/>
  </div>;
};
