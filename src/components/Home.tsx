import * as React from "react";
import ui, { FlexColumn, MembersPanel } from "../common/UI";
import List1 from "./List1";
import * as PropTypes from "prop-types";
import { navigate } from "@reach/router";
import styled from "@emotion/styled";
const LeftPanel = styled(ui.Panel)`
  background-color: #373c3f;
  margin: 10px;
`;

export default class Home extends React.Component {
  static propTypes = {
    path: PropTypes.string
  };
  render() {
    return (
      <LeftPanel flexDirection="column">
        <ui.Button
          onClick={() => {
            navigate(`dashboard`);
          }}
        >
          Right
        </ui.Button>
        <List1 keyword="redux" />
        {/* </ui.LeftPanel> */}
      </LeftPanel>
    );
  }
}

// LeftContainer.propTypes = {
//     path: PropTypes.func,
//   };
