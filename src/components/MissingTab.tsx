import React, { useEffect, useState } from 'react';

interface MissingTabProps {
  data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string; wicCol: string }[];
}

const MissingTab: React.FC<MissingTabProps> = ({ data }) => {
  const [lastLimit, setlastLimit] = useState('');
  const [filteredValues, setfilteredValues] = useState<{ value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string }[]>([]);
  const [filteredValues7Neigs, setfilteredValues7Neigs] = useState<{ value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string }[]>([]);
  const [filteredValuesRev, setfilteredValuesRev] = useState<{ value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string }[]>([]);
  const [filteredValues7NeigsRev, setfilteredValues7NeigsRev] = useState<{ value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string }[]>([]);
  const [filteredValuesFor, setfilteredValuesFor] = useState<{ value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string }[]>([]);
  const [filteredValues7NeigsFor, setfilteredValues7NeigsFor] = useState<{ value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string }[]>([]);
  const neigArray = [
    { numlimit: '3', num: '0', neigsStr: ',32,0,26,' },
    { numlimit: '5', num: '0', neigsStr: ',15,32,0,26,3,' },
    { numlimit: '7', num: '0', neigsStr: ',19,15,32,0,26,3,35,' },
    { numlimit: '3', num: '1', neigsStr: ',20,1,33,' },
    { numlimit: '5', num: '1', neigsStr: ',14,20,1,33,16,' },
    { numlimit: '7', num: '1', neigsStr: ',31,14,20,1,33,16,24,' },
    { numlimit: '3', num: '2', neigsStr: ',25,2,21,' },
    { numlimit: '5', num: '2', neigsStr: ',17,25,2,21,4,' },
    { numlimit: '7', num: '2', neigsStr: ',34,17,25,2,21,4,19,' },
    { numlimit: '3', num: '3', neigsStr: ',26,3,35,' },
    { numlimit: '5', num: '3', neigsStr: ',0,26,3,35,12,' },
    { numlimit: '7', num: '3', neigsStr: ',32,0,26,3,35,12,28,' },
    { numlimit: '3', num: '4', neigsStr: ',21,4,19,' },
    { numlimit: '5', num: '4', neigsStr: ',2,21,4,19,15,' },
    { numlimit: '7', num: '4', neigsStr: ',25,2,21,4,19,15,32,' },
    { numlimit: '3', num: '5', neigsStr: ',24,5,10,' },
    { numlimit: '5', num: '5', neigsStr: ',16,24,5,10,23,' },
    { numlimit: '7', num: '5', neigsStr: ',33,16,24,5,10,23,8,' },
    { numlimit: '3', num: '6', neigsStr: ',27,6,34,' },
    { numlimit: '5', num: '6', neigsStr: ',13,27,6,34,17,' },
    { numlimit: '7', num: '6', neigsStr: ',36,13,27,6,34,17,25,' },
    { numlimit: '3', num: '7', neigsStr: ',28,7,29,' },
    { numlimit: '5', num: '7', neigsStr: ',12,28,7,29,18,' },
    { numlimit: '7', num: '7', neigsStr: ',35,12,28,7,29,18,22,' },
    { numlimit: '3', num: '8', neigsStr: ',23,8,30,' },
    { numlimit: '5', num: '8', neigsStr: ',10,23,8,30,11,' },
    { numlimit: '7', num: '8', neigsStr: ',5,10,23,8,30,11,36,' },
    { numlimit: '3', num: '9', neigsStr: ',22,9,31,' },
    { numlimit: '5', num: '9', neigsStr: ',18,22,9,31,14,' },
    { numlimit: '7', num: '9', neigsStr: ',29,18,22,9,31,14,31,' },
    { numlimit: '3', num: '10', neigsStr: ',5,10,23,' },
    { numlimit: '5', num: '10', neigsStr: ',24,5,10,23,8,' },
    { numlimit: '7', num: '10', neigsStr: ',16,24,5,10,23,8,30,' },
    { numlimit: '3', num: '11', neigsStr: ',30,11,36,' },
    { numlimit: '5', num: '11', neigsStr: ',8,30,11,36,13,' },
    { numlimit: '7', num: '11', neigsStr: ',23,8,30,11,36,13,27,' },
    { numlimit: '3', num: '12', neigsStr: ',35,12,28,' },
    { numlimit: '5', num: '12', neigsStr: ',3,35,12,28,7,' },
    { numlimit: '7', num: '12', neigsStr: ',26,3,35,12,28,7,29,' },
    { numlimit: '3', num: '13', neigsStr: ',36,13,27,' },
    { numlimit: '5', num: '13', neigsStr: ',11,36,13,27,6,' },
    { numlimit: '7', num: '13', neigsStr: ',30,11,36,13,27,6,34,' },
    { numlimit: '3', num: '14', neigsStr: ',31,14,20,' },
    { numlimit: '5', num: '14', neigsStr: ',9,31,14,20,1,' },
    { numlimit: '7', num: '14', neigsStr: ',22,9,31,14,20,1,33,' },
    { numlimit: '3', num: '15', neigsStr: ',19,15,32,' },
    { numlimit: '5', num: '15', neigsStr: ',4,19,15,32,0,' },
    { numlimit: '7', num: '15', neigsStr: ',21,4,19,15,32,0,26,' },
    { numlimit: '3', num: '16', neigsStr: ',33,16,24,' },
    { numlimit: '5', num: '16', neigsStr: ',1,33,16,24,5,' },
    { numlimit: '7', num: '16', neigsStr: ',20,1,33,16,24,5,10,' },
    { numlimit: '3', num: '17', neigsStr: ',34,17,25,' },
    { numlimit: '5', num: '17', neigsStr: ',6,34,17,25,2,' },
    { numlimit: '7', num: '17', neigsStr: ',27,6,34,17,25,2,21,' },
    { numlimit: '3', num: '18', neigsStr: ',29,18,22,' },
    { numlimit: '5', num: '18', neigsStr: ',7,29,18,22,9,' },
    { numlimit: '7', num: '18', neigsStr: ',28,7,29,18,22,9,31,' },
    { numlimit: '3', num: '19', neigsStr: ',4,19,15,' },
    { numlimit: '5', num: '19', neigsStr: ',21,4,19,15,32,' },
    { numlimit: '7', num: '19', neigsStr: ',2,21,4,19,15,32,0,' },
    { numlimit: '3', num: '20', neigsStr: ',14,20,1,' },
    { numlimit: '5', num: '20', neigsStr: ',31,14,20,1,33,' },
    { numlimit: '7', num: '20', neigsStr: ',9,31,14,20,1,33,24,' },
    { numlimit: '3', num: '21', neigsStr: ',2,21,4,' },
    { numlimit: '5', num: '21', neigsStr: ',25,2,21,4,19,' },
    { numlimit: '7', num: '21', neigsStr: ',17,25,2,21,4,19,15,' },
    { numlimit: '3', num: '22', neigsStr: ',18,22,9,' },
    { numlimit: '5', num: '22', neigsStr: ',29,18,22,9,31,' },
    { numlimit: '7', num: '22', neigsStr: ',7,29,18,22,9,31,14,' },
    { numlimit: '3', num: '23', neigsStr: ',10,23,8,' },
    { numlimit: '5', num: '23', neigsStr: ',5,10,23,8,30,' },
    { numlimit: '7', num: '23', neigsStr: ',24,5,10,23,8,30,11,' },
    { numlimit: '3', num: '24', neigsStr: ',16,24,5,' },
    { numlimit: '5', num: '24', neigsStr: ',33,16,24,5,10,' },
    { numlimit: '7', num: '24', neigsStr: ',1,33,16,24,5,10,5,' },
    { numlimit: '3', num: '25', neigsStr: ',17,25,2,' },
    { numlimit: '5', num: '25', neigsStr: ',34,17,25,2,21,' },
    { numlimit: '7', num: '25', neigsStr: ',6,34,17,25,2,21,4,' },
    { numlimit: '3', num: '26', neigsStr: ',0,26,3,' },
    { numlimit: '5', num: '26', neigsStr: ',32,0,26,3,35,' },
    { numlimit: '7', num: '26', neigsStr: ',15,32,0,26,3,35,12,' },
    { numlimit: '3', num: '27', neigsStr: ',13,27,6,' },
    { numlimit: '5', num: '27', neigsStr: ',36,13,27,6,34,' },
    { numlimit: '7', num: '27', neigsStr: ',11,36,13,27,6,34,17,' },
    { numlimit: '3', num: '28', neigsStr: ',12,28,7,' },
    { numlimit: '5', num: '28', neigsStr: ',35,12,28,7,29,' },
    { numlimit: '7', num: '29', neigsStr: ',3,35,12,28,7,29,18,' },
    { numlimit: '3', num: '30', neigsStr: ',8,30,11,' },
    { numlimit: '5', num: '30', neigsStr: ',23,8,30,11,36,' },
    { numlimit: '7', num: '30', neigsStr: ',10,23,8,30,11,36,13,' },
    { numlimit: '3', num: '31', neigsStr: ',9,31,14,' },
    { numlimit: '5', num: '31', neigsStr: ',22,9,31,14,20,' },
    { numlimit: '7', num: '31', neigsStr: ',18,22,9,31,14,20,1,' },
    { numlimit: '3', num: '32', neigsStr: ',15,32,0,' },
    { numlimit: '5', num: '32', neigsStr: ',19,15,32,0,26,' },
    { numlimit: '7', num: '32', neigsStr: ',4,19,15,32,0,26,3,' },
    { numlimit: '3', num: '33', neigsStr: ',1,33,16,' },
    { numlimit: '5', num: '33', neigsStr: ',20,1,33,16,24,' },
    { numlimit: '7', num: '33', neigsStr: ',14,20,1,33,16,24,5,' },
    { numlimit: '3', num: '34', neigsStr: ',6,34,17,' },
    { numlimit: '5', num: '34', neigsStr: ',27,6,34,17,25,' },
    { numlimit: '7', num: '34', neigsStr: ',13,27,6,34,17,25,2,' },
    { numlimit: '3', num: '35', neigsStr: ',3,35,12,' },
    { numlimit: '5', num: '35', neigsStr: ',26,3,35,12,28,' },
    { numlimit: '7', num: '35', neigsStr: ',0,26,3,35,12,28,7,' },
    { numlimit: '3', num: '36', neigsStr: ',11,36,13,' },
    { numlimit: '5', num: '36', neigsStr: ',30,11,36,13,27,' },
    { numlimit: '7', num: '36', neigsStr: ',8,30,11,36,13,27,6,' }
  ];

  useEffect(() => {
    setlastLimit('12');
    updatecalculatedValue('12');
    updatecalculatedValueNew('12');
  }, [data]);

  const handleButtonClick = (value: string) => {
    setlastLimit(value);
    updatecalculatedValue(value);
    updatecalculatedValueNew(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlastLimit(e.target.value);
    updatecalculatedValue(e.target.value);
    updatecalculatedValueNew(e.target.value);
  };

  const updatecalculatedValue = (inputLimit: string) => {
    const topValues = data.slice(0, parseInt(inputLimit));
    const valuesString = data.map(item => item.value).join(', ');
    console.log('All Values' + valuesString);
    const result = removeDuplicates(topValues, 'value');
    const result1 = removeDuplicatesWithCondition(result, 'value', '3');
    const result2 = removeDuplicatesWithCondition(result1, 'value', '5');
    setfilteredValues(result2);
    const tempResult = JSON.parse(JSON.stringify(result2));
    const result7NeigFil = removeDuplicatesWithCondition(tempResult, 'value', '7');
    setfilteredValues7Neigs(result7NeigFil);
  };

  const updatecalculatedValueNew = (inputLimit: string) => {
    const topRevValues = data.filter(item => item.rev === 'R').slice(0, parseInt(inputLimit));
    const RevString = topRevValues.map(item => item.value).join(', ');
    console.log('Rev Values' + RevString);
    const topForValues = data.filter(item => item.rev === 'F').slice(0, parseInt(inputLimit));
    const ForString = topForValues.map(item => item.value).join(', ');
    console.log('For Values' + ForString);
    const resultRev1 = removeDuplicates(topRevValues, 'value');
    const resultFor1 = removeDuplicates(topForValues, 'value');
    const resultRev2 = removeDuplicatesWithCondition(resultRev1, 'value', '3');
    const resultFor2 = removeDuplicatesWithCondition(resultFor1, 'value', '3');
    const resultRev3 = removeDuplicatesWithCondition(resultRev2, 'value', '5');
    const resultFor3 = removeDuplicatesWithCondition(resultFor2, 'value', '5');
    setfilteredValuesRev(resultRev3);
    setfilteredValuesFor(resultFor3);
    const tempResultRev = JSON.parse(JSON.stringify(resultRev3));
    const tempResultFor = JSON.parse(JSON.stringify(resultFor3));
    const result7NeigFilRev = removeDuplicatesWithCondition(tempResultRev, 'value', '7');
    const result7NeigFilFor = removeDuplicatesWithCondition(tempResultFor, 'value', '7');
    setfilteredValues7NeigsRev(result7NeigFilRev);
    setfilteredValues7NeigsFor(result7NeigFilFor);
  };

  function removeDuplicates(data: MissingTabProps['data'], attribute: keyof MissingTabProps['data'][0]): MissingTabProps['data'] {
    const countMap: { [key: string]: number } = {};
    const indexMap: { [key: string]: number[] } = {};
  
    // Count occurrences and store indices
    data.forEach((item, index) => {
      const value = item[attribute];
      if (countMap[value]) {
        countMap[value]++;
        indexMap[value].push(index);
      } else {
        countMap[value] = 1;
        indexMap[value] = [index];
      }
    });
  
    // Filter out items with even occurrences and leave one if odd
    const indicesToRemove = new Set<number>();
    for (const value in countMap) {
      if (countMap[value] % 2 === 0) {
        indexMap[value].forEach(index => indicesToRemove.add(index));
      } else if (countMap[value] > 1) {
        indexMap[value].slice(0, countMap[value] - 1).forEach(index => indicesToRemove.add(index));
      }
    }
  
    return data.filter((_, index) => !indicesToRemove.has(index));
  }
  
  function removeDuplicatesWithCondition(data: MissingTabProps['data'], attribute: keyof MissingTabProps['data'][0], neigLimit: string): MissingTabProps['data'] {
    let i = 0;
    while (i < data.length) {
        let j = i + 1;
        while (j < data.length) {
          console.log('1.value:' + data[i][attribute]);
          const value = data[i][attribute];
          console.log('2.next value:' + data[j][attribute]);
          const neigEntry = neigArray.find(neig => neig.numlimit === neigLimit && neig.num === data[j][attribute]);
          console.log('3.neigEntry.neigsStr:' + neigEntry?.neigsStr);
          if (neigEntry && neigEntry.neigsStr.includes(','+value+',')) {
            console.log('4.removed:' + data[i][attribute]);
            console.log('5.removed 1:' + data[j][attribute]);
            data.splice(j, 1);
            data.splice(i, 1);
            i--; // Adjust index after removal
            break;
          } else {
            console.log('6.not removed:');
            j++;
          }
        }
        i++;
    }
    return data;
  }
  

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <div>
                <input type="text" value={lastLimit} onChange={handleInputChange} placeholder="Enter manual limit" />
                <button onClick={() => handleButtonClick('10')}>last 10</button>
                <button onClick={() => handleButtonClick('12')}>last 12</button>
                <button onClick={() => handleButtonClick('15')}>last 15</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <table>
                <tr>
                  <td>
                  <div>
                      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                          <tr>
                            <th style={{ border: '1px solid black', padding: '8px' }}>5 Ne</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredValues.map((item, index) => (
                            <tr key={index}>
                              <td style={{ border: '1px solid black', padding: '8px' }}>{item.value}-{item.rev}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                  <td>
                  <div>
                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                          <tr>
                            <th style={{ border: '1px solid black', padding: '8px' }}>7 Ne</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredValues7Neigs.map((item, index) => (
                            <tr key={index}>
                              <td style={{ border: '1px solid black', padding: '8px' }}>{item.value}-{item.rev}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>              
            </td>
          </tr>
          {/*<tr>
          <td>
              <div>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Rev only -5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredValuesRev.map((item, index) => (
                      <tr key={index}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.value}-{item.rev}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
          <tr>
          <td>
              <div>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid black', padding: '8px' }}>For only-5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredValuesFor.map((item, index) => (
                      <tr key={index}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.value}-{item.rev}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
          <tr>
          <td>
              <div>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Rev only -7</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredValues7NeigsRev.map((item, index) => (
                      <tr key={index}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.value}-{item.rev}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
          <tr>
          <td>
              <div>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid black', padding: '8px' }}>For only 7</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredValues7NeigsFor.map((item, index) => (
                      <tr key={index}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.value}-{item.rev}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
          </tr>*/}
        </tbody>
      </table>
    </div>
  );
};

export default MissingTab;
