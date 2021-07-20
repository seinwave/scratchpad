import React from "react";
import styled from "styled-components";
import { Compass } from "react-feather";

const icons = {
  compass: Compass,
};

const Icon = ({ id, size, strokeWidth = 1, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={{
        "--size": size + "px",
        "--stroke-width": strokeWidth + "px",
      }}
      {...delegated}
    >
      <Component color="currentColor" size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);

  */ & > svg {
    display: block;
    stroke-width: var(--stroke-width);
  }
`;

export default Icon;
