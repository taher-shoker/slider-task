import React from "react";
import {
  CardItem,
  Image,
  CardInfo,
  TopPart,
  Line,
  BottomPart,
  CardTitle,
  SubInfo,
  Description,
  Date,
  Owner,
  Number,
  VoteButton,
} from "./style";
const CardContainer = ({ item }) => {
  return (
    <CardItem>
      <Image src={item.src} />
      <CardInfo>
        <TopPart>
          <CardTitle>{item.title}</CardTitle>
          <SubInfo>
            <Description>{item.description}</Description>
            <Date>{item.date}</Date>
          </SubInfo>
        </TopPart>
        <Line />
        <BottomPart>
          <Owner>By {item.user}</Owner>
          <Number>{item.numVotes} Votes</Number>
        </BottomPart>
      </CardInfo>
      <VoteButton>vote</VoteButton>
    </CardItem>
  );
};

export default CardContainer;
