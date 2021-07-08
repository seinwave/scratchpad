import React from "react";
import CodeBlock from "./components/CodeBlock/CodeBlock";

function App() {
  const [theme, setTheme] = React.useState("dark");

  function themeSwitcher() {
    if (theme === "dark") {
      return setTheme("light");
    } else return setTheme("dark");
  }

  return (
    <>
      <button onClick={() => themeSwitcher()}>Swap Theme</button>
      <CodeBlock theme={theme} />
    </>
  );
}

export default App;
