import React, { FC } from "react";

const List: FC<{ data: { node: string; name: string }[] }> = ({ data }) => (
  <ul>
    {data.map((item) => (
      <li>
        {item.node}
        {item.name}
      </li>
    ))}
  </ul>
);

export default List;
