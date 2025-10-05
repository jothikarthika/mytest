import React, { useState } from 'react';

interface CommonChecksProps {
  data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; wicCol: string }[];
}

const CommonChecks: React.FC<CommonChecksProps> = ({ data }) => {
  
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <div>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid black', padding: '8px' }}>5 Neigs</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CommonChecks;
