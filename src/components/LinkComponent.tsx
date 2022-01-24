import React from "react";
import { Flex, Link } from "vcc-ui";

interface LinkProps {
  id: String;
}

const LinkComponent: React.FC<LinkProps> = ({ id }) => {
  return (
    <Flex
      extend={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Link arrow="right" href={`/learn/${id}`} aria-label={`${id}`}>
        READ MORE
      </Link>
      <Link href={`/shop/${id}`} arrow="right" aria-label={`${id}`}>
        SHOP
      </Link>
    </Flex>
  );
};

export default LinkComponent;