import styled from 'styled-components';

export const StyledTab = styled.div`
  display: inline-block;
  width: 150px;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
  border-left: 1px solid grey; 
  border-right: 1px solid grey;
  border-radius: 10px 10px 0 0;
  background-color: lime;
  font-weight: bolder;
  &.selected {
    background-color: salmon;
  }
`