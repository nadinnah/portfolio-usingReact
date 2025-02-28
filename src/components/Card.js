import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  
  return <HStack>
  <VStack align="start">
    <Image src={imageSrc}></Image>
    <Heading >{title}</Heading>
    <Text>{description}</Text>
    <HStack><Text>See more</Text><FontAwesomeIcon icon={faArrowRight} size="1x" /></HStack>
  </VStack>
</HStack>;
};

export default Card;
