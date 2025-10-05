import React, { useState } from 'react';
import TabOne from './DetailsTab';
import TabTwo from './HistoryTab';

interface TabsProps {
  data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string; wicCol: string }[];
}

const Tabs: React.FC<TabsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <h3>Detailed</h3>
      <button onClick={() => setActiveTab(0)}>Details</button>
      <button onClick={() => setActiveTab(1)}>History</button>
      {activeTab === 0 ? <TabOne data={data} /> : <TabTwo data={data} />}
    </div>
  );
};

export default Tabs;
