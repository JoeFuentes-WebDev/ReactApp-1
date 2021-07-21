import React, { useState, useContext } from 'react';
import { TabContext } from './App';
import { Content as TabRelatedContent} from './Content';
import { StyledTab } from './styled/Tab';

export const Tabs = () => {
  const tabs = useContext(TabContext).TABS;
  const [tab, setTab ] = useState(tabs[0]); 
  return <div>
    {tabs.map((t, i) => <StyledTab key={i} className={tab === t ? 'selected' : ''}
                          // style={{'backgroundColor':`${tab === t ? 'red' : 'green'}`}}
                          onClick={() => setTab(t)}> {t}
                        </StyledTab>
  )}
    <TabRelatedContent content={tab} />
  </div>
}

export default Tabs
