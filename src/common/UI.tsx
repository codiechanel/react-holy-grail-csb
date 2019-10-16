// import styled from 'styled-components'
import styled from "@emotion/styled";

export const List = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
export const Discover = styled.div`
  height: 100%;
  padding: 10px;
  overflow-y: auto;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

export const MembersPanel = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  /* min-height: 0; */
  background-color: white;
`;
export const DetailsPanel = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: white;
  min-height: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 0;
  flex: 1;
  background-color: yellowgreen;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: auto;
`;

export const LeftPanel = styled.div`
  margin: 10px;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  background-color: yellow;
`;
export const Input = styled.input`
  /* color: black; */
  border: none;
  margin-left: 10px;
  margin-right: auto;
  padding-right: 10;
  background-color: inherit;
`;
export const Button = styled.button`
  margin: 10px;
  border-radius: 4px;
  border: none;
  /* background: #6100ed; */
  /* background: transparent; */
  background: rgba(0, 0, 0, 0);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`;
const ui = {
  List,
  Discover,
  FlexColumn,
  MembersPanel,
  DetailsPanel,
  LeftPanel,
  RightPanel,
  Input,
  Button
};

export default ui;
