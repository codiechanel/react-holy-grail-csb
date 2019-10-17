import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ui, { FlexColumn, MembersPanel } from "./common/UI";
import List1 from "./components/List1";
import Autocomplete from "./components/Autocomplete";
import Members from "./components/Members";
import { Router, Link } from "@reach/router";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

const HorizontalBox = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

type NavProp = {
  // primary?: string;
  flex: string;
};

const Section = styled.div<NavProp>`
  /* we are allowed margins here because we dont use 100 */
  flex: 1;
  flex: ${props => props.flex};
  display: flex;
  /*  this needs to be a row 
  but we dont have to declare it because 
  its a flex default */
`;

const LeftSection = styled(Section)`
  margin: 10px;
  background-color: rebeccapurple;
`;

const RightSection = styled(Section)`
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: rebeccapurple;
`;

let useMedia = query => {
  let [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    let media = window.matchMedia(query);
    let listener = () => setMatches(media.matches);
    media.addListener(listener);
    listener();
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

function App() {
  let small = useMedia("(min-width: 600px)");
  let large = useMedia("(min-width: 1000px)");
  let content = (
    <LeftSection flex="1">
      <Router>
        <Home path="/">
          <Dashboard path="dashboard" />
        </Home>
      </Router>
    </LeftSection>
  );
  /* if screen is larger than 600, then lets display 2 panels */
  if (small) {
    content = (
      <>
        <LeftSection flex="1">
          <Home path="/" />
        </LeftSection>
        <RightSection flex="2">
          <Dashboard />
        </RightSection>
      </>
    );
  }
  // return <HorizontalBox>{content}</HorizontalBox>;
  return content;
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
  // <Hello compiler="TypeScript" framework="React" />,
  // document.getElementById("root")
);
