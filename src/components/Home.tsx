import * as React from "react";
import ui, { FlexColumn, MembersPanel } from "../common/UI";
import List1 from "./List1";
import * as PropTypes from "prop-types";
import { navigate } from "@reach/router";
import styled from "@emotion/styled";

export default class Home extends React.Component {
  static propTypes = {
    path: PropTypes.string
  };
  render() {
    return (
      <ui.Panel flexDirection="column">
        <ui.Button
          onClick={() => {
            navigate(`dashboard`);
          }}
        >
          Right
        </ui.Button>
        <ui.Button
          onClick={() => {
            navigate(`about`);
          }}
        >
          About
        </ui.Button>
        <List1 keyword="redux" />
      </ui.Panel>
    );
  }
}
