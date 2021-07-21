import React, { useContext } from 'react';
import { TabContext } from './App';
import StyledArticle from './styled/StyledArticle'

export const Content = ({content}) => {
  const CONTENT = useContext(TabContext).CONTENT;
  console.log('context', useContext(TabContext), content);
  return <StyledArticle> [{CONTENT[content]} ]</StyledArticle>
}