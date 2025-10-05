import React, { useContext } from 'react';
import MissingTab from './MissingTab';

interface TabOneProps {
  data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string; wicCol: string }[];
}

const DetailsTab: React.FC<TabOneProps> = ({ data }) => {
  return <table>
  <tbody>
    <tr>
      <td style={{ border: '1px solid black', padding: '8px' }}>
        <table>
              <tbody>
                <tr>
                  <td><MissingTab data={data} /></td>
                </tr>
              </tbody>
            </table>
      </td>
    </tr>
  </tbody>
</table>;
};

export default DetailsTab;
