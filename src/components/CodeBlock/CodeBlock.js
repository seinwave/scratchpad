import React from "react";
import styled from "styled-components/macro";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeBlock({
  filename = "file.ext",
  code = "import * as fart from './fart/wiener-fart'",
}) {
  return (
    <Wrapper>
      <CodeBlockElement>
        <FileName>{filename}</FileName>
        <Extension>jsx</Extension>
        <Code>
          <CodeText>
            <SyntaxHighlighter
              language="javascript"
              style={nightOwl}
              customStyle={{ backgroundColor: "#31324e" }}
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
  color: white;
`;

const FileName = styled.div`
  position: absolute;
  top: -15px;
  left: -5px;
  padding: 8px;
  background-color: #454571;
  border-radius: 4px;
  font-size: 14px;
`;

const Extension = styled.div`
  position: absolute;
  top: 5px;
  right: 4px;
  padding: 0px 6px;
  font-size: 14px;
  color: hsl(240deg 54% 95%);
  opacity: 0.7;
  background-color: #31324e;
  border: solid 1px;
  border-radius: 3px;
`;

const Code = styled.div`
  background-color: #31324e;
  padding: 3rem 2rem;
  border-radius: 5px;
  box-shadow: 0px 5px 20px #c3c5c8;
`;

const CodeText = styled.code``;
