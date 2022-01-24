import React from "react";
import { useRouter } from "next/router";
import { Block, Text } from "vcc-ui";

function ShopDetail() {
  const router = useRouter();
  const shopId = router.query.shopId;
  return (
    <Block extend={{ textAlign: "center", margin: "4 rem" }} as="h1">
      <Text subStyle="emphasis"> Volvo {shopId}</Text>
    </Block>
  );
}

export default ShopDetail;