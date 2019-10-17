import * as React from "react";
import ui, { FlexColumn, MembersPanel } from "../common/UI";
import List1 from "./List1";
import * as PropTypes from "prop-types";
import { navigate } from "@reach/router";
import styled from "@emotion/styled";

const RightPanel = styled(ui.Panel)`
  background-color: #2f3437;
  /* margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px; */
`;

export default class Dashboard extends React.Component {
  static propTypes = {
    path: PropTypes.string
  };
  render() {
    return (
      <RightPanel flexDirection="column">
        <ui.Button
          onClick={() => {
            console.log("hiuhk");
            navigate(`/`);
          }}
        >
          Back
        </ui.Button>
        <List1 keyword="mobx" />
      </RightPanel>
    );
  }
}

// LeftContainer.propTypes = {
//     path: PropTypes.func,
//   };
