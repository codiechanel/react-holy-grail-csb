import * as React from "react";
import ui, { FlexColumn, MembersPanel } from "../common/UI";
import List1 from "./List1";
import * as PropTypes from "prop-types";
import { navigate } from "@reach/router";
import styled from "@emotion/styled";

export default class Dashboard extends React.Component {
  static propTypes = {
    path: PropTypes.string,
    default: PropTypes.bool
  };
  render() {
    return (
      <ui.Panel flexDirection="column">
        <ui.Button
          onClick={() => {
            navigate(`/`);
          }}
        >
          Back
        </ui.Button>
        <List1 keyword="mobx" />
      </ui.Panel>
    );
  }
}
