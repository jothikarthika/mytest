import React from 'react';

interface TabTwoProps {
  data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string; wicCol: string }[];
}

const TabTwo: React.FC<TabTwoProps> = ({ data }) => {
  const topValues = data.slice(0, 25);
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>SL No</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Value</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Is Voz</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Is Orp</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Is Tie</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Is End</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Col</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>O/E</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Section</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Is Reverse</th>
        </tr>
      </thead>
      <tbody>
        {topValues.map((item, index) => (
          <tr key={index}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{index + 1}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.value}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.isVoz}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.isOrp}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.isTi}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.isEnd}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.col}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.type}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.sec}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.rev}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabTwo;
