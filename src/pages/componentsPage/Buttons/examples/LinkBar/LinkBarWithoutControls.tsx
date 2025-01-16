import React from "react";
import { LinkBar } from "react-ui-essentials";

const LinkBarWithoutControls = () => {
  return (
    <LinkBar
      links={[
        { name: "Tab 1", url: "/tab1" },
        { name: "Tab 2", url: "/tab2" },
        { name: "Tab 3", url: "/tab3" },
      ]}
      showControls={false}
    />
  );
};

export default LinkBarWithoutControls;
