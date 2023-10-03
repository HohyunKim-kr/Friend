import React from "react";
import { Main } from "./pages/Main";
import styled from "styled-components";

function App() {
  return (
    <Inside>
      <Main></Main>
    </Inside>
  );
}

const Inside = styled.div`
  border: 1px solid red;
  height: 100%
  width: 50px
  box-sizing: border-box
`;

export default App;
