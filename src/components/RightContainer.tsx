import * as React from "react";
import ui, { FlexColumn, MembersPanel } from "../common/UI";
import List1 from "./List1";
import * as PropTypes from "prop-types";
import { navigate } from "@reach/router";

export default class RightContainer extends React.Component {
  static propTypes = {
    path: PropTypes.string
  };
  render() {
    return (
      <ui.LeftPanel>
        <ui.Button
          onClick={() => {
            console.log("hiuhk");
            navigate(`/`);
          }}
        >
          Back
        </ui.Button>
        <List1 keyword="redux" />
      </ui.LeftPanel>
    );
  }
}

// LeftContainer.propTypes = {
//     path: PropTypes.func,
//   };
