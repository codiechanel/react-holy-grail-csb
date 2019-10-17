import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ui, { FlexColumn, MembersPanel } from "./common/UI";
import List1 from "./components/List1";
import Autocomplete from "./components/Autocomplete";
import Members from "./components/Members";
import { Router, Link } from "@reach/router";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
const HorizontalBox = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;
const Nav = styled.div`
  flex: 1;
  /* flex-basis: 33%; */
  overflow: auto;
  /* flex-basis: 100%; */

  display: flex;

  flex-direction: column;
  align-items: stretch;
  /* align items in Cross Axis */
  height: 100vh;
  position: relative;
  /*height: 100%;*/
`;
const Article = styled.div`
  flex: 2;
  /* flex-basis: 66%; */
  flex-direction: column;
  align-items: stretch; /* align items in Cross Axis */
  display: flex;
  height: 100vh;
`;

function Hello() {
  return <div>hello</div>;
}

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
    <Nav>
      <Router>
        {/* <Home path="/" /> */}
        <LeftContainer path="/" />
        <RightContainer path="/dashboard" />
        {/* <Dashboard path="dashboard" /> */}
      </Router>
    </Nav>
  );
  /* if screen is larger than 600, then lets display 2 panels */
  if (small) {
    content = (
      <>
        {content}
        <Article>
          <ui.RightPanel>
            <Members />
          </ui.RightPanel>
        </Article>
      </>
    );
  }
  return <HorizontalBox>{content}</HorizontalBox>;
}
/* return (
  <div className="Media">
    <h1>Media</h1>
    <p>Small? {small ? "Yep" : "Nope"}.</p>
    <p>Large? {large ? "Yep" : "Nope"}.</p>
  </div>
); */
/* class App extends React.Component<any, any> {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {
    console.log("the best");
  }

  render() {
    let small = useMedia("(min-width: 600px)");
    let large = useMedia("(min-width: 1000px)");
    console.log(small, large);
    return (
      <HorizontalBox>
        <Nav>welcome the best hey now</Nav>
        <Article>
          <Hello />
        </Article>
      </HorizontalBox>
    );
  }
} */

ReactDOM.render(
  <App />,
  document.getElementById("root")
  // <Hello compiler="TypeScript" framework="React" />,
  // document.getElementById("root")
);
