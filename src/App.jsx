import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
    </>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
  body{
    font-family: Nunito,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;
