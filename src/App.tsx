import React, { useEffect, useState } from 'react';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import InputFields from './components/Input';
import TopThreeCheck from './components/TopThreeCheck';
import MissingTab from './components/MissingTab';
const App = () => {
  const [data, setData] = useState<{ value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string; wicCol: string }[]>([]);
  const secTier = [27,13,36,11,30,8,23,10,5,24,16,33];
  const secOrp= [1,20,14,31,9,17,34,6];
  const secVoz = [22,18,29,7,28,12,35,3,26,0,32,15,19,4,21,2,25];
  const endingNos = [27,6,33,1,22,9,25,17,19,15,28,12];
  const reNos = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
  const blNos = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
  const coLeft = [1,4,7,10,13,16,19,22,25,28,31,34];
  const coMid = [2,5,8,11,14,17,20,23,26,29,32,35];
  const coRig = [3,6,9,12,15,18,21,24,27,30,33,36];
  const Opposites = [
    '32-5',
    '15-24',
    '19-16',
    '4-33',
    '21-1',
    '2-20',
    '25-14',
    '17-31',
    '34-9',
    '6-22',
    '27-18',
    '13-29',
    '36-7',
    '11-28',
    '30-12',
    '8-35',
    '23-3',
    '10-26'
  ];

  useEffect(() => {
    const cookieData = localStorage.getItem('data'); 
    if (cookieData) {
      handleSubmit(cookieData, false) 
    } }, []);



  const handleAdd = (value: string) => {
    if (value) {
      const valuesArray = value.split(',').map((val) => val.trim());
      const isReverse = (data[0].rev == 'R')? 'F': 'R';
      const newData = valuesArray.map((val) => ({
        value: val,
        isVoz: checkVoz(val,secVoz),
        isOrp: checkOrp(val, secOrp),
        isTi: checkTie(val, secTier),
        isEnd: checkIsEnd(val, endingNos),
        col: checkCol(val, reNos, blNos),
        type: checkType(val),
        sec: checkSec(val),
        rev: isReverse,
        wicCol: checkWicCol(val,coLeft,coMid,coRig)
      }));
      setData([...newData, ...data]);
      localStorage.setItem('data', data.map(obj => obj.value).join(" "));
    }
  };

  const handleSubmit = (value: string, isChecked: boolean) => {
    if (value) {
      const valuesArray = value.split(' ').map((val) => val.trim());
      let isReverse = isChecked;
      
      const newData = valuesArray.map((val) => {
        const newItem = {
          value: val,
          isVoz: checkVoz(val, secVoz),
          isOrp: checkOrp(val, secOrp),
          isTi: checkTie(val, secTier),
          isEnd: checkIsEnd(val, endingNos),
          col: checkCol(val, reNos, blNos),
          type: checkType(val),
          sec: checkSec(val),
          rev: isReverse ? 'R' : 'F',
          wicCol: checkWicCol(val,coLeft,coMid,coRig)
        };
        isReverse = !isReverse;  
        return newItem;
      });
  
      setData(newData);
    }
  };
  

  const handleEdit = () => {
    return data.map(obj => obj.value).join(" ");
  };

  return (
    <div>
      <table>
        <tr>
          <td>
            <table>
              <tr>
                <td> 
                  <InputFields onAdd={handleAdd} onSubmit={handleSubmit} onEdit={handleEdit} data={data}/>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <table>
                      <tr>
                        <td style={{width:'250px'}}>
                          <TopThreeCheck data={data} />
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default App;

function checkTie(val: string, secTier: number[]): string {
  return secTier.some(element => element === parseInt(val)) ? 'Yes' : '';
}

function checkOrp(val: string, secOrp: number[]): string {
  return secOrp.some(element => element === parseInt(val)) ? 'Yes' : '';
}

function checkVoz(val: string, secVoz: number[]): string {
  return secVoz.some(element => element === parseInt(val)) ? 'Yes' : '';
}

function checkCol(val: string, reNos: number[], blNos: number[]): string {
  if(reNos.some(element => element === parseInt(val))){
    return 'REE';
  }else if(blNos.some(element => element === parseInt(val))){
    return 'BLAAAAAA';
  }else{
    return 'GREEEEEEEEEE';
  }
}

function checkIsEnd(val: string, endNos: number[]): string {
  return endNos.some(element => element === parseInt(val)) ? 'Yes' : '';
}

function checkType(val: string): string {
  if(val == '0'){
    return '';
  }else if(val.endsWith('0') || val.endsWith('2') || val.endsWith('4') || val.endsWith('6') || val.endsWith('8')){
    return 'EVV';
  }else{
    return 'OOOOOOOO';
  }
}

function checkSec(val: string): string {
  if(val == '0'){
    return '';
  }else if(parseInt(val) < 13){
    return '1';
  }else if(parseInt(val) > 12 && parseInt(val) < 25){
    return '.........2';
  }else{
    return '........................3';
  }
}

function checkWicCol(val: string, coLeft: number[], coMid: number[], coRig: number[]): string {
  if(coLeft.some(element => element === parseInt(val))){
    return 'Le';
  }else if(coMid.some(element => element === parseInt(val))){
    return 'Mi';
  }else if(coRig.some(element => element === parseInt(val))){
    return 'Ri';
  }else {
    return '';
  }
}

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};
  expires=${expires}; path=/`;
};

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};


