import React from "react";
import { LinkBar } from "react-ui-essentials";
import { RoundedIcons } from "react-ui-essentials-icons";
const { Home, Settings, Person } = RoundedIcons;

const LinkBarwithIcons = () => {
  let links = [
    { name: "Home", url: "/", startIcon: <Home /> },
    { name: "Settings", url: "/settings", endIcon: <Settings /> },
    { name: "Profile", url: "/profile", startIcon: <Person /> },
  ];
  return <LinkBar links={links} activeLinkUrl="/settings" />;
};

export default LinkBarwithIcons;
