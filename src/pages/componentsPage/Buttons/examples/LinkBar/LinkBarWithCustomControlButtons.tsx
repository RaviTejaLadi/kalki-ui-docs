import React from "react";
import { LinkBar } from "react-ui-essentials";

const LinkBarWithCustomControlButtons = () => {
  return (
    <LinkBar
      links={[
        { name: "Product A", url: "/product-a" },
        { name: "Product B", url: "/product-b" },
        { name: "Product C", url: "/product-c" },
      ]}
      controlsSize="md"
      controlsVariant="primary"
    />
  );
};

export default LinkBarWithCustomControlButtons;
