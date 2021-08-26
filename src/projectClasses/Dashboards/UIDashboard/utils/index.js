import {
  AppstoreOutlined,
  MailOutlined,
  MessageOutlined,
  BarChartOutlined,
  UndoOutlined,
} from "@ant-design/icons";
export const SideBarLinks = [
  {
    label: "Dashboard",
    icon: <AppstoreOutlined />,
    path: "/uidashboard/home",
  },
  {
    label: "Emails",
    icon: <MailOutlined />,
    path: "/uidashboard/email",
  },
  {
    label: "SMS",
    icon: <MessageOutlined />,
    path: "/uidashboard/sms",
  },
  {
    label: "Revenues",
    icon: <BarChartOutlined />,
    path: "/uidashboard/revenue",
  },
  {
    label: "Refunds",
    icon: <UndoOutlined />,
    path: "/uidashboard/refund",
  },
];

export const ContentPages = [
  {
    name: "Dashboard",
    path: "/uidashboard/home",
    component: "This is the main dashboard",
  },
  {
    name: "Emails",
    path: "/uidashboard/email",
    component: "This is email",
  },
  {
    name: "SMS",
    path: "/uidashboard/sms",
    component: "This is sms",
  },
  {
    name: "Revenues",
    path: "/uidashboard/revenue",
    component: "This is revenues",
  },
  {
    name: "Refunds",
    path: "/uidashboard/refund",
    component: "This is refunds",
  },
  {
    name: "Profile",
    path: "/uidashboard/profile",
    component: "This is my profile",
  },
  {
    name: "Notifications",
    path: "/uidashboard/notification",
    component: "These are my notifications",
  },
];
