import React from "react";
import { LinkBar } from "react-ui-essentials";

const CustomSizedLinkBar = () => {
  let links = [
    { name: "Option 1", url: "/option1" },
    { name: "Option 2", url: "/option2" },
    { name: "Option 3", url: "/option3" },
  ];
  return <LinkBar links={links} width="300px" height="50px" />;
};

export default CustomSizedLinkBar;
