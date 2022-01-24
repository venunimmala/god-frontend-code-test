import React from "react";
import { Block, ExtendCSS, Flex, Text, View } from "vcc-ui";
import Image from "next/image";
import LinkComponent from "./LinkComponent";

interface Props {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

const Card: React.FC<Props> = ({
  id,
  modelName,
  bodyType,
  modelType,
  imageUrl,
}) => {
  return (
    <View role='listitem'>
    <Flex extend={clickableContainerCSS} aria-label={modelName} as='a' href={`/learn/${id}`}>
      <Text
        variant="bates"
        subStyle="emphasis"
        extend={secondaryCss}
        className="item-category"
      >
        {bodyType }
      </Text>
      <Block as="h4" extend={titleCSS}>
        <Text
          as="span"
          variant="columbus"
          subStyle="emphasis"
          extend={modelNameCSS}
          className="item-name"
        >
          {modelName}
        </Text>
        {modelType && (
          <Text
            as="span"
            extend={secondaryCss}
            variant="columbus"
            className="item-name-suffix"
          >
            {modelType}
          </Text>
        )}
      </Block>
      <Flex extend={imageWrapperCSS}>
        <Image
          src={imageUrl}
          alt={id}
          width="100%"
          height="250"
          objectFit="fill"
          placeholder="empty"
          className="item-image"
        />
      </Flex>
    </Flex>
    <LinkComponent id={id}/>
    </ View>
  );
};

const clickableContainerCSS: ExtendCSS = ({ theme: { color } }) => ({
  textDecoration: "none",
  //width: "350px",
  flex: "1 1 auto",
  margin : '0 0.5rem',
  "& .item-image": {
    pointerEvents: "none",
    transition: "transform 300ms",
    transform: "scale(1.01)",
  },
  ":hover": {
    "& .item-image": {
      transform: "scale(1.08)",
    },
    "& .item-category": {
      color: color.foreground.action,
    },
    "& .item-name": {
      color: color.foreground.action,
    },
    "& .item-name-suffix": {
      color: color.foreground.action,
    },
    
  },
});

const secondaryCss: ExtendCSS = ({ theme: { color } }) => ({
  color: color.foreground.secondary,
});
const titleCSS: ExtendCSS = ({ theme: { baselineSubGrid } }) => ({
  display: "flex",
  flexWrap: "wrap",
  margin: `0 0 ${baselineSubGrid}px 0`,
});
const modelNameCSS: ExtendCSS = {
  marginRight: 5,
};
const imageWrapperCSS: ExtendCSS = ({ theme: { color, baselineGrid } }) => ({
  margin: `${baselineGrid * 2}px 0`,
  background: color.background.secondary,
  position: "relative",
  overflow: "hidden",
  transition: "box-shadow 300ms",
});

export default Card;