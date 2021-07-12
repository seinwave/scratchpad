import React, { FC } from "react";
import CodeBlock from "./components/CodeBlock/CodeBlock";
import FakeTweet from "./components/FakeTweet/FakeTweet";
import styled from "styled-components/macro";
import HelloTS from "./components/HelloTS/HelloTS";
import List from "./components/HelloTS/List";

const sampleTweet = {
  name: "Smadolph Smitler",
  handle: "@theRealAdrianBrody",
  pic: "https://en.wikipedia.org/wiki/Tony_Soprano#/media/File:Tony_Soprano_2.jpg",
  likes: 400000,
  retweets: 910,
  date: "2020-04-18",
  content:
    "I agree @theRealStephenHawking: women aren't funny, and never will be.",
};

const sampleList = [
  { node: "Umpire", name: "Astrochart" },
  { node: "$$Cash$$", name: "Phillys Schlafly" },
  { node: "GrapeApe", name: "Orangutan" },
  { node: "Hambone", name: "Metafilter" },
  { node: "NoSpankYou", name: "Sophisticats" },
];

const App: FC = () => {
  const [theme, setTheme] = React.useState("dark");
  const [componentNumber, setComponentNumber] = React.useState(0);

  const componentArray = [
    <CodeBlock
      theme={theme}
      filename={"nothankyou.tsx"}
      code={"import * as OiNoi from example"}
    />,
    <FakeTweet theme={theme} tweet={sampleTweet} />,
    <HelloTS />,
    <List data={sampleList} />,
  ];
  const currentComponent = componentArray[componentNumber];

  function themeSwitcher() {
    if (theme === "dark") {
      return setTheme("light");
    } else return setTheme("dark");
  }

  function componentIncrementer() {
    if (componentNumber >= componentArray.length - 1) {
      return setComponentNumber(0);
    }

    return setComponentNumber(componentNumber + 1);
  }

  return (
    <Wrapper>
      <ButtonRow>
        {" "}
        <Button onClick={() => themeSwitcher()}>
          {theme === "light" ? "Dark" : "Light"} Mode
        </Button>
        <Button onClick={() => componentIncrementer()}>
          Switch Components
        </Button>
      </ButtonRow>
      {currentComponent}
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  padding: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  width: 80%;
  margin-bottom: 50px;
`;

const Button = styled.button`
  background-color: #fff;
  border: solid 2px navy;
  border-radius: 5px;
  color: navy;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 8px;
  &:hover {
    color: #fff;
    background-color: navy;
  }
`;
