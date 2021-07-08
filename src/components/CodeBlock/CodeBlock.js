import React from "react";
import styled from "styled-components/macro";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl, xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";

// const COLORS = {
//   dark:
// }

export default function CodeBlock({
  filename = "file.ext",
  code = "import * as fart from './fart/wiener-fart'",
  theme = "dark",
}) {
  return (
    <Wrapper
      style={{
        "--background-color": theme === "light" ? "#31324e" : "#fff",
        "--color": theme === "light" ? "#fff" : "#31324e",
      }}
    >
      <CodeBlockElement>
        <FileName
          style={{
            "--filename-background-color":
              theme === "light" ? "#454571" : "HSL(240, 39%, 74%)",
            "--border": theme === "light" ? "" : `solid 1px var(--color)`,
          }}
        >
          {filename}
        </FileName>
        <Extension>jsx</Extension>
        <Code>
          <CodeText>
            <SyntaxHighlighter
              language="javascript"
              style={theme === "light" ? nightOwl : xcode}
              customStyle={{
                backgroundColor: theme === "light" ? "#31324e" : "#fff",
              }}
            >
              {code}
            </SyntaxHighlighter>
          </CodeText>
        </Code>
      </CodeBlockElement>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const CodeBlockElement = styled.div`
  width: 600px;
  position: relative;
  color: var(--color);
`;

const FileName = styled.div`
  position: absolute;
  top: -15px;
  left: -5px;
  padding: 8px;
  background-color: var(--filename-background-color);

  border-radius: 4px;
  font-size: 14px;
`;

const Extension = styled.div`
  position: absolute;
  top: 5px;
  right: 4px;
  padding: 0px 6px;
  font-size: 14px;
  color: var(--color);
  opacity: 0.7;
  background-color: var(--background-color);
  border: solid 1px var(--color);
  border-radius: 3px;
`;

const Code = styled.div`
  background-color: var(--background-color);
  padding: 3rem 2rem;
  border-radius: 5px;
  box-shadow: 0px 5px 20px #c3c5c8;
`;

const CodeText = styled.code``;
