import React, { FC } from "react";
import styled from "styled-components/macro";

const FakeTweet: FC<{
  theme: string;
  tweet: {
    name: string;
    handle: string;
    pic: string;
    likes: Number;
    retweets: Number;
    date: string;
    content: string;
  };
}> = ({ theme, tweet }) => (
  <Wrapper>
    <TweetContainer>
      <TweetHeadRow>
        <User>
          <UserImage src={tweet.pic.toString()}></UserImage>
          <UserInfo>
            <UserName> {tweet.name}</UserName>
            <UserHandle>{tweet.handle}</UserHandle>
          </UserInfo>
        </User>
        <Icon>BIRD</Icon>
      </TweetHeadRow>
      <TweetBody>{tweet.content}</TweetBody>
      <TweetDate>{tweet.date}</TweetDate>
      <TweetStatsRow>
        <Likes>{tweet.likes}</Likes>
        <Retweets>{tweet.retweets} people are Tweeting about this</Retweets>
      </TweetStatsRow>{" "}
    </TweetContainer>
  </Wrapper>
);

export default FakeTweet;

const Wrapper = styled.div``;

const TweetContainer = styled.div`
  width: 600px;
  position: relative;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0px 5px 20px #c3c5c8;
`;

const TweetHeadRow = styled.div`
  display: flex;
`;

const User = styled.div`
  display: flex;
  gap: 18px;
`;

const UserImage = styled.img`
  width: 50px;
  border-radius: 50px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div``;

const UserHandle = styled.div``;

const Icon = styled.div`
  margin-left: auto;
`;

const TweetBody = styled.div`
  display: flex;
  margin-top: 28px;
`;

const TweetDate = styled.div`
  display: flex;
  margin-top: 14px;
  padding-bottom: 14px;
  border-bottom: solid 1px black;
`;

const TweetStatsRow = styled.div`
  display: flex;
  margin-top: 14px;
  gap: 48px;
`;

const Likes = styled.div``;

const Retweets = styled.div``;
