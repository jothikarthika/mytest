import React, { useEffect, useState } from 'react';
import Wheel from './Wheel';
import { count } from 'console';

interface TopThreeCheckProps {
  data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string; wicCol: string }[];
}

interface finalResult { 
  Combination: string;
  Style: string;
  Missing: string; 
}

interface PossibleValue { 
  Value: string;
}

const TopThreeCheck: React.FC<TopThreeCheckProps> = ({ data }) => {
  const [ThreeCheckArray, set3CheckArray] = useState<finalResult[]>([]);
  const [ThreeQuadArray, set3QuadArray] = useState<finalResult[]>([]);
  const [FiveCheckArray, set5CheckArray] = useState<finalResult[]>([]);
  const [ThreeBINArray, set3BINArray] = useState<finalResult[]>([]);
  const [FiveBINArray, set5BINArray] = useState<finalResult[]>([]);
  const [ThreeStyleArray, set3StyleArray] = useState<finalResult[]>([]);
  const [ThreeComArray, set3ComArray] = useState<finalResult[]>([]);
  const [FiveStyleArray, set5StyleArray] = useState<finalResult[]>([]);
  const [AltCheckArray, setAltCheckArray] = useState<finalResult[]>([]);

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
    { numlimit: '7', num: '28', neigsStr: ',3,35,12,28,7,29,18,' },
    { numlimit: '3', num: '29', neigsStr: ',7,29,18,' },
    { numlimit: '5', num: '29', neigsStr: ',28,7,29,18,22,' },
    { numlimit: '7', num: '29', neigsStr: ',12,28,7,29,18,22,9,' },
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

  const combinations = [
    {Comb:[1,2,3,4,5,6], style: '=', quad: '1'},
    {Comb:[4,5,6,7,8,9], style: '=', quad: '1'},
    {Comb:[7,8,9,10,11,12], style: '=', quad: '1'},
    {Comb:[10,11,12,13,14,15], style: '=', quad: '1'},
    {Comb:[13,14,15,16,17,18], style: '=', quad: '1'},
    {Comb:[16,17,18,19,20,21], style: '=', quad: '1'},
    {Comb:[19,20,21,22,23,24], style: '=', quad: '1'},
    {Comb:[22,23,24,25,26,27], style: '=', quad: '1'},
    {Comb:[25,26,27,28,29,30], style: '=', quad: '1'},
    {Comb:[28,29,30,31,32,33], style: '=', quad: '1'},
    {Comb:[31,32,33,34,35,36], style: '=', quad: '1'},
    {Comb:[1,3,5,7,9,12], style: '1R', quad: '1'},
    {Comb:[2,4,6,8,10,11], style: '1B', quad: '1'},
    {Comb:[14,16,18,19,21,23], style: '2R', quad: '1'},
    {Comb:[13,15,17,20,22,24], style: '2B', quad: '1'},
    {Comb:[25,27,30,32,34,36], style: '3R', quad: '1'},
    {Comb:[26,28,29,31,33,35], style: '3B', quad: '1'},
    {Comb:[1,3,5,7,9], style: 'x', quad: '1'},
    {Comb:[4,6,8,10,12], style: 'x', quad: '1'},
    {Comb:[7,9,11,13,15], style: 'x', quad: '1'},
    {Comb:[10,12,14,16,18], style: 'x', quad: '1'},
    {Comb:[13,15,17,19,21], style: 'x', quad: '1'},
    {Comb:[16,18,20,22,24], style: 'x', quad: '1'},
    {Comb:[19,21,23,25,27], style: 'x', quad: '1'},
    {Comb:[22,24,26,28,30], style: 'x', quad: '1'},
    {Comb:[25,27,29,31,33], style: 'x', quad: '1'},
    {Comb:[28,30,32,34,36], style: 'x', quad: '1'},
    {Comb:[0,1,2,3,5], style: '✜', quad: '1'},
    {Comb:[2,4,5,6,8], style: '✜', quad: '1'},
    {Comb:[5,7,8,9,11], style: '✜', quad: '1'},
    {Comb:[8,10,11,12,14], style: '✜', quad: '1'},
    {Comb:[11,13,14,15,17], style: '✜', quad: '1'},
    {Comb:[14,16,17,18,20], style: '✜', quad: '1'},
    {Comb:[17,19,20,21,23], style: '✜', quad: '1'},
    {Comb:[20,22,23,24,26], style: '✜', quad: '1'},
    {Comb:[23,25,26,27,29], style: '✜', quad: '1'},
    {Comb:[26,28,29,30,32], style: '✜', quad: '1'},
    {Comb:[29,31,32,33,35], style: '✜', quad: '1'},
    {Comb:[1,4,7,10], style: '┊', quad: '2'},
    {Comb:[2,5,8,11], style: '┊', quad: '2'},
    {Comb:[3,6,9,12], style: '┊', quad: '2'},
    {Comb:[0,1,4,7,10], style: '┊', quad: '1'},
    {Comb:[0,2,5,8,11], style: '┊', quad: '1'},
    {Comb:[0,3,6,9,12], style: '┊', quad: '1'},
    {Comb:[13,16,19,22], style: '┊', quad: '2'},
    {Comb:[14,17,20,23], style: '┊', quad: '2'},
    {Comb:[15,18,21,24], style: '┊', quad: '2'},
    {Comb:[0,13,16,19,22], style: '┊', quad: '1'},
    {Comb:[0,14,17,20,23], style: '┊', quad: '1'},
    {Comb:[0,15,18,21,24], style: '┊', quad: '1'},
    {Comb:[25,28,31,34], style: '┊', quad: '2'},
    {Comb:[26,29,32,35], style: '┊', quad: '2'},
    {Comb:[27,30,33,36], style: '┊', quad: '2'},
    {Comb:[0,25,28,31,34], style: '┊', quad: '1'},
    {Comb:[0,26,29,32,35], style: '┊', quad: '1'},
    {Comb:[0,27,30,33,36], style: '┊', quad: '1'},
    {Comb:[1,2,4,5], style: '⊞|', quad: '2'},
    {Comb:[2,3,5,6], style: '|⊞', quad: '2'},
    {Comb:[4,5,7,8], style: '⊞|', quad: '2'},
    {Comb:[5,6,8,9], style: '|⊞', quad: '2'},
    {Comb:[7,8,10,11], style: '⊞|', quad: '2'},
    {Comb:[8,9,11,12], style: '|⊞', quad: '2'},
    {Comb:[10,11,13,14], style: '⊞|', quad: '2'},
    {Comb:[11,12,14,15], style: '|⊞', quad: '2'},
    {Comb:[13,14,16,17], style: '⊞|', quad: '2'},
    {Comb:[14,15,17,18], style: '|⊞', quad: '2'},
    {Comb:[16,17,19,20], style: '⊞|', quad: '2'},
    {Comb:[17,18,20,21], style: '|⊞', quad: '2'},
    {Comb:[19,20,22,23], style: '⊞|', quad: '2'},
    {Comb:[20,21,23,24], style: '|⊞', quad: '2'},
    {Comb:[22,23,25,26], style: '⊞|', quad: '2'},
    {Comb:[23,24,26,27], style: '|⊞', quad: '2'},
    {Comb:[25,26,28,29], style: '⊞|', quad: '2'},
    {Comb:[26,27,29,30], style: '|⊞', quad: '2'},
    {Comb:[28,29,31,32], style: '⊞|', quad: '2'},
    {Comb:[29,30,32,33], style: '|⊞', quad: '2'},
    {Comb:[31,32,34,35], style: '⊞|', quad: '2'},
    {Comb:[32,33,35,36], style: '|⊞', quad: '2'},
    {Comb:[0,10,20,30], style: '0s', quad: '5'},
    {Comb:[1,11,21,31], style: '1s', quad: '5'},
    {Comb:[2,12,22,32], style: '2s', quad: '5'},
    {Comb:[3,13,23,33], style: '3s', quad: '5'},
    {Comb:[4,14,24,34], style: '4s', quad: '5'},
    {Comb:[5,15,25,35], style: '5s', quad: '5'},
    {Comb:[6,16,26,36], style: '6s', quad: '5'},
    {Comb:[7,17,27], style: '7s', quad: '5'},
    {Comb:[8,18,28], style: '8s', quad: '5'},
    {Comb:[9,19,29], style: '9s', quad: '5'},
    {Comb:[1,2,3], style: 'BIN', quad: '4'},
    {Comb:[2,3,4], style: 'BIN', quad: '4'},
    {Comb:[3,4,5], style: 'BIN', quad: '4'},
    {Comb:[4,5,6], style: 'BIN', quad: '4'},
    {Comb:[5,6,7], style: 'BIN', quad: '4'},
    {Comb:[6,7,8], style: 'BIN', quad: '4'},
    {Comb:[7,8,9], style: 'BIN', quad: '4'},
    {Comb:[8,9,10], style: 'BIN', quad: '4'},
    {Comb:[9,10,11], style: 'BIN', quad: '4'},
    {Comb:[10,11,12], style: 'BIN', quad: '4'},
    {Comb:[11,12,13], style: 'BIN', quad: '4'},
    {Comb:[12,13,14], style: 'BIN', quad: '4'},
    {Comb:[14,15,16], style: 'BIN', quad: '4'},
    {Comb:[15,16,17], style: 'BIN', quad: '4'},
    {Comb:[17,18,19], style: 'BIN', quad: '4'},
    {Comb:[18,19,20], style: 'BIN', quad: '4'},
    {Comb:[19,20,21], style: 'BIN', quad: '4'},
    {Comb:[20,21,22], style: 'BIN', quad: '4'},
    {Comb:[21,22,23], style: 'BIN', quad: '4'},
    {Comb:[22,23,24], style: 'BIN', quad: '4'},
    {Comb:[23,24,25], style: 'BIN', quad: '4'},
    {Comb:[24,25,26], style: 'BIN', quad: '4'},
    {Comb:[25,26,27], style: 'BIN', quad: '4'},
    {Comb:[26,27,28], style: 'BIN', quad: '4'},
    {Comb:[27,28,29], style: 'BIN', quad: '4'},
    {Comb:[28,29,30], style: 'BIN', quad: '4'},
    {Comb:[29,30,31], style: 'BIN', quad: '4'},
    {Comb:[30,31,32], style: 'BIN', quad: '4'},
    {Comb:[31,32,33], style: 'BIN', quad: '4'},
    {Comb:[32,33,34], style: 'BIN', quad: '4'},
    {Comb:[33,34,35], style: 'BIN', quad: '4'},
    {Comb:[34,35,36], style: 'BIN', quad: '4'},
	{Comb:[0,1,4], style: '|', quad: '3'},
	{Comb:[0,2,5], style: '|', quad: '3'},
	{Comb:[0,3,6], style: '|', quad: '3'},
	{Comb:[1,4,7], style: '|', quad: '3'},
	{Comb:[2,5,8], style: '|', quad: '3'},
	{Comb:[3,6,9], style: '|', quad: '3'},
	{Comb:[4,7,10], style: '|', quad: '3'},
	{Comb:[5,8,11], style: '|', quad: '3'},
	{Comb:[6,9,12], style: '|', quad: '3'},
	{Comb:[7,10,13], style: '|', quad: '3'},
	{Comb:[8,11,14], style: '|', quad: '3'},
	{Comb:[9,12,15], style: '|', quad: '3'},
	{Comb:[10,13,16], style: '|', quad: '3'},
	{Comb:[11,14,17], style: '|', quad: '3'},
	{Comb:[12,15,18], style: '|', quad: '3'},
	{Comb:[13,16,19], style: '|', quad: '3'},
	{Comb:[14,17,20], style: '|', quad: '3'},
	{Comb:[15,18,21], style: '|', quad: '3'},
	{Comb:[16,19,22], style: '|', quad: '3'},
	{Comb:[17,20,23], style: '|', quad: '3'},
	{Comb:[18,21,24], style: '|', quad: '3'},
	{Comb:[19,22,25], style: '|', quad: '3'},
	{Comb:[20,23,26], style: '|', quad: '3'},
	{Comb:[21,24,27], style: '|', quad: '3'},
	{Comb:[22,25,28], style: '|', quad: '3'},
	{Comb:[23,26,29], style: '|', quad: '3'},
	{Comb:[24,27,30], style: '|', quad: '3'},
	{Comb:[25,28,31], style: '|', quad: '3'},
	{Comb:[26,29,32], style: '|', quad: '3'},
	{Comb:[27,30,33], style: '|', quad: '3'},
	{Comb:[28,31,34], style: '|', quad: '3'},
	{Comb:[29,32,35], style: '|', quad: '3'},
	{Comb:[30,33,36], style: '|', quad: '3'},
    {Comb:[1,5,9], style: '╲', quad: '3'},
    {Comb:[3,5,7], style: '╱', quad: '3'},
    {Comb:[4,8,12], style: '╲', quad: '3'},
    {Comb:[6,8,10], style: '╱', quad: '3'},
    {Comb:[7,11,15], style: '╲', quad: '3'},
    {Comb:[9,11,13], style: '╱', quad: '3'},
    {Comb:[10,14,18], style: '╲', quad: '3'},
    {Comb:[12,14,16], style: '╱', quad: '3'},
    {Comb:[13,17,21], style: '╲', quad: '3'},
    {Comb:[15,17,19], style: '╱', quad: '3'},
    {Comb:[16,20,24], style: '╲', quad: '3'},
    {Comb:[18,20,22], style: '╱', quad: '3'},
    {Comb:[22,26,30], style: '╲', quad: '3'},
    {Comb:[24,26,28], style: '╱', quad: '3'},
    {Comb:[25,29,33], style: '╲', quad: '3'},
    {Comb:[27,29,31], style: '╱', quad: '3'},
    {Comb:[28,32,36], style: '╲', quad: '3'},
    {Comb:[30,32,34], style: '╱', quad: '3'},
    {Comb:[11,22,33], style: 'com', quad: '5'},
    {Comb:[28,22,33], style: 'com', quad: '5'},
    {Comb:[11,6,33], style: 'com', quad: '5'},
    {Comb:[11,22,4], style: 'com', quad: '5'},
    {Comb:[21,18,36], style: 'com', quad: '5'},
    {Comb:[1,27,36], style: 'com', quad: '5'},
    {Comb:[1,18,7], style: 'com', quad: '5'},
    {Comb:[21,4,6], style: 'com', quad: '5'},
    {Comb:[1,33,6], style: 'com', quad: '5'},
    {Comb:[1,4,22], style: 'com', quad: '5'},
    {Comb:[12,21,26,34], style: '12co', quad: '5'},
    {Comb:[2,12,22,32,11,20,22,24,29], style: '2co', quad: '5'},
    {Comb:[5,15,25,35,10,20,30], style: '5co', quad: '5'},
    {Comb:[6,16,26,36,12,15,17,23,24,28,32,33], style: '6co', quad: '5'},
    {Comb:[7,17,27,14,16,18,21,25,28,29,34,35], style: '7co', quad: '5'},
    {Comb:[8,18,28,16,17,18,19,24,26,28,30,32,35,36], style: '8co', quad: '5'},
    {Comb:[9,19,29,18,27,33,36], style: '9co', quad: '5'},
    {Comb:[21,4,7,10], style: 'A┊', quad: 'A2'},
    {Comb:[1,33,7,10], style: 'A┊', quad: 'A2'},
    {Comb:[1,4,36,10], style: 'A┊', quad: 'A2'},
    {Comb:[1,4,7,26], style: 'A┊', quad: 'A2'},
    {Comb:[20,5,8,11], style: 'A┊', quad: 'A2'},
    {Comb:[2,32,8,11], style: 'A┊', quad: 'A2'},
    {Comb:[2,5,35,11], style: 'A┊', quad: 'A2'},
    {Comb:[2,5,8,28], style: 'A┊', quad: 'A2'},
    {Comb:[23,6,9,12], style: 'A┊', quad: 'A2'},
    {Comb:[3,22,9,12], style: 'A┊', quad: 'A2'},
    {Comb:[3,6,34,12], style: 'A┊', quad: 'A2'},
    {Comb:[3,6,9,30], style: 'A┊', quad: 'A2'},
    {Comb:[0,21,4,7,10], style: 'A┊', quad: 'A1'},
    {Comb:[0,1,33,7,10], style: 'A┊', quad: 'A1'},
    {Comb:[0,1,4,36,10], style: 'A┊', quad: 'A1'},
    {Comb:[0,1,4,7,26], style: 'A┊', quad: 'A1'},
    {Comb:[0,20,5,8,11], style: 'A┊', quad: 'A1'},
    {Comb:[0,2,32,8,11], style: 'A┊', quad: 'A1'},
    {Comb:[0,2,5,35,11], style: 'A┊', quad: 'A1'},
    {Comb:[0,2,5,8,28], style: 'A┊', quad: 'A1'},
    {Comb:[0,23,6,9,12], style: 'A┊', quad: 'A1'},
    {Comb:[0,3,22,9,12], style: 'A┊', quad: 'A1'},
    {Comb:[0,3,6,34,12], style: 'A┊', quad: 'A1'},
    {Comb:[0,3,6,9,30], style: 'A┊', quad: 'A1'},
    {Comb:[29,16,19,22], style: 'A┊', quad: 'A2'},
    {Comb:[13,19,19,22], style: 'A┊', quad: 'A2'},
    {Comb:[13,16,16,22], style: 'A┊', quad: 'A2'},
    {Comb:[13,16,19,6], style: 'A┊', quad: 'A2'},
    {Comb:[25,17,20,23], style: 'A┊', quad: 'A2'},
    {Comb:[14,31,20,23], style: 'A┊', quad: 'A2'},
    {Comb:[14,17,2,23], style: 'A┊', quad: 'A2'},
    {Comb:[14,17,20,3], style: 'A┊', quad: 'A2'},
    {Comb:[24,18,21,24], style: 'A┊', quad: 'A2'},
    {Comb:[15,27,21,24], style: 'A┊', quad: 'A2'},
    {Comb:[15,18,1,24], style: 'A┊', quad: 'A2'},
    {Comb:[15,18,21,15], style: 'A┊', quad: 'A2'},
    {Comb:[14,28,31,34], style: 'A┊', quad: 'A2'},
    {Comb:[25,11,31,34], style: 'A┊', quad: 'A2'},
    {Comb:[25,28,17,34], style: 'A┊', quad: 'A2'},
    {Comb:[25,28,31,9], style: 'A┊', quad: 'A2'},
    {Comb:[10,29,32,35], style: 'A┊', quad: 'A2'},
    {Comb:[26,13,32,35], style: 'A┊', quad: 'A2'},
    {Comb:[26,29,5,35], style: 'A┊', quad: 'A2'},
    {Comb:[26,29,32,8], style: 'A┊', quad: 'A2'},
    {Comb:[18,30,33,36], style: 'A┊', quad: 'A2'},
    {Comb:[27,12,33,36], style: 'A┊', quad: 'A2'},
    {Comb:[27,30,4,36], style: 'A┊', quad: 'A2'},
    {Comb:[27,30,33,7], style: 'A┊', quad: 'A2'},
    {Comb:[26,29,16,19,22], style: 'A┊', quad: 'A1'},
    {Comb:[26,13,19,19,22], style: 'A┊', quad: 'A1'},
    {Comb:[26,13,16,16,22], style: 'A┊', quad: 'A1'},
    {Comb:[26,13,16,19,6], style: 'A┊', quad: 'A1'},
    {Comb:[26,25,17,20,23], style: 'A┊', quad: 'A1'},
    {Comb:[26,14,31,20,23], style: 'A┊', quad: 'A1'},
    {Comb:[26,14,17,2,23], style: 'A┊', quad: 'A1'},
    {Comb:[26,14,17,20,3], style: 'A┊', quad: 'A1'},
    {Comb:[26,24,18,21,24], style: 'A┊', quad: 'A1'},
    {Comb:[26,15,27,21,24], style: 'A┊', quad: 'A1'},
    {Comb:[26,15,18,1,24], style: 'A┊', quad: 'A1'},
    {Comb:[26,15,18,21,15], style: 'A┊', quad: 'A1'},
    {Comb:[26,14,28,31,34], style: 'A┊', quad: 'A1'},
    {Comb:[26,25,11,31,34], style: 'A┊', quad: 'A1'},
    {Comb:[26,25,28,17,34], style: 'A┊', quad: 'A1'},
    {Comb:[26,25,28,31,9], style: 'A┊', quad: 'A1'},
    {Comb:[26,10,29,32,35], style: 'A┊', quad: 'A1'},
    {Comb:[26,26,13,32,35], style: 'A┊', quad: 'A1'},
    {Comb:[26,26,29,5,35], style: 'A┊', quad: 'A1'},
    {Comb:[26,26,29,32,8], style: 'A┊', quad: 'A1'},
    {Comb:[26,18,30,33,36], style: 'A┊', quad: 'A1'},
    {Comb:[26,27,12,33,36], style: 'A┊', quad: 'A1'},
    {Comb:[26,27,30,4,36], style: 'A┊', quad: 'A1'},
    {Comb:[26,27,30,33,7], style: 'A┊', quad: 'A1'},
    {Comb:[21,2,4,5], style: 'A⊞|', quad: 'A2'},
    {Comb:[1,20,4,5], style: 'A⊞|', quad: 'A2'},
    {Comb:[1,2,33,5], style: 'A⊞|', quad: 'A2'},
    {Comb:[1,2,4,32], style: 'A⊞|', quad: 'A2'},
    {Comb:[20,3,5,6], style: 'A|⊞', quad: 'A2'},
    {Comb:[2,23,5,6], style: 'A|⊞', quad: 'A2'},
    {Comb:[2,3,32,6], style: 'A|⊞', quad: 'A2'},
    {Comb:[2,3,5,22], style: 'A|⊞', quad: 'A2'},
    {Comb:[33,5,7,8], style: 'A⊞|', quad: 'A2'},
    {Comb:[4,32,7,8], style: 'A⊞|', quad: 'A2'},
    {Comb:[4,5,36,8], style: 'A⊞|', quad: 'A2'},
    {Comb:[4,5,7,35], style: 'A⊞|', quad: 'A2'},
    {Comb:[32,6,8,9], style: 'A|⊞', quad: 'A2'},
    {Comb:[5,22,8,9], style: 'A|⊞', quad: 'A2'},
    {Comb:[5,6,35,9], style: 'A|⊞', quad: 'A2'},
    {Comb:[5,6,8,34], style: 'A|⊞', quad: 'A2'},
    {Comb:[36,8,10,11], style: 'A⊞|', quad: 'A2'},
    {Comb:[7,35,10,11], style: 'A⊞|', quad: 'A2'},
    {Comb:[7,8,26,11], style: 'A⊞|', quad: 'A2'},
    {Comb:[7,8,10,28], style: 'A⊞|', quad: 'A2'},
    {Comb:[35,9,11,12], style: 'A|⊞', quad: 'A2'},
    {Comb:[8,34,11,12], style: 'A|⊞', quad: 'A2'},
    {Comb:[8,9,28,12], style: 'A|⊞', quad: 'A2'},
    {Comb:[8,9,11,30], style: 'A|⊞', quad: 'A2'},
    {Comb:[26,11,13,14], style: 'A⊞|', quad: 'A2'},
    {Comb:[10,26,13,14], style: 'A⊞|', quad: 'A2'},
    {Comb:[10,11,29,14], style: 'A⊞|', quad: 'A2'},
    {Comb:[10,11,13,25], style: 'A⊞|', quad: 'A2'},
    {Comb:[28,12,14,15], style: 'A|⊞', quad: 'A2'},
    {Comb:[11,30,14,15], style: 'A|⊞', quad: 'A2'},
    {Comb:[11,12,25,15], style: 'A|⊞', quad: 'A2'},
    {Comb:[11,12,14,24], style: 'A|⊞', quad: 'A2'},
    {Comb:[29,14,16,17], style: 'A⊞|', quad: 'A2'},
    {Comb:[13,25,16,17], style: 'A⊞|', quad: 'A2'},
    {Comb:[13,14,19,17], style: 'A⊞|', quad: 'A2'},
    {Comb:[13,14,16,31], style: 'A⊞|', quad: 'A2'},
    {Comb:[25,15,17,18], style: 'A|⊞', quad: 'A2'},
    {Comb:[14,24,17,18], style: 'A|⊞', quad: 'A2'},
    {Comb:[14,15,31,18], style: 'A|⊞', quad: 'A2'},
    {Comb:[14,15,17,27], style: 'A|⊞', quad: 'A2'},
    {Comb:[19,17,19,20], style: 'A⊞|', quad: 'A2'},
    {Comb:[16,31,19,20], style: 'A⊞|', quad: 'A2'},
    {Comb:[16,17,33,20], style: 'A⊞|', quad: 'A2'},
    {Comb:[16,17,19,2], style: 'A⊞|', quad: 'A2'},
    {Comb:[31,18,20,21], style: 'A|⊞', quad: 'A2'},
    {Comb:[17,27,20,21], style: 'A|⊞', quad: 'A2'},
    {Comb:[17,18,2,21], style: 'A|⊞', quad: 'A2'},
    {Comb:[17,18,20,1], style: 'A|⊞', quad: 'A2'},
    {Comb:[16,20,22,23], style: 'A⊞|', quad: 'A2'},
    {Comb:[19,2,22,23], style: 'A⊞|', quad: 'A2'},
    {Comb:[19,20,6,23], style: 'A⊞|', quad: 'A2'},
    {Comb:[19,20,22,3], style: 'A⊞|', quad: 'A2'},
    {Comb:[2,21,23,24], style: 'A|⊞', quad: 'A2'},
    {Comb:[20,1,23,24], style: 'A|⊞', quad: 'A2'},
    {Comb:[20,21,3,24], style: 'A|⊞', quad: 'A2'},
    {Comb:[20,21,23,15], style: 'A|⊞', quad: 'A2'},
    {Comb:[6,23,25,26], style: 'A⊞|', quad: 'A2'},
    {Comb:[22,3,25,26], style: 'A⊞|', quad: 'A2'},
    {Comb:[22,23,14,26], style: 'A⊞|', quad: 'A2'},
    {Comb:[22,23,25,10], style: 'A⊞|', quad: 'A2'},
    {Comb:[3,24,26,27], style: 'A|⊞', quad: 'A2'},
    {Comb:[23,15,26,27], style: 'A|⊞', quad: 'A2'},
    {Comb:[23,24,10,27], style: 'A|⊞', quad: 'A2'},
    {Comb:[23,24,26,18], style: 'A|⊞', quad: 'A2'},
    {Comb:[14,26,28,29], style: 'A⊞|', quad: 'A2'},
    {Comb:[25,10,28,29], style: 'A⊞|', quad: 'A2'},
    {Comb:[25,26,11,29], style: 'A⊞|', quad: 'A2'},
    {Comb:[25,26,28,13], style: 'A⊞|', quad: 'A2'},
    {Comb:[10,27,29,30], style: 'A|⊞', quad: 'A2'},
    {Comb:[26,18,29,30], style: 'A|⊞', quad: 'A2'},
    {Comb:[26,27,13,30], style: 'A|⊞', quad: 'A2'},
    {Comb:[26,27,29,12], style: 'A|⊞', quad: 'A2'},
    {Comb:[11,29,31,32], style: 'A⊞|', quad: 'A2'},
    {Comb:[28,13,31,32], style: 'A⊞|', quad: 'A2'},
    {Comb:[28,29,17,32], style: 'A⊞|', quad: 'A2'},
    {Comb:[28,29,31,5], style: 'A⊞|', quad: 'A2'},
    {Comb:[13,30,32,33], style: 'A|⊞', quad: 'A2'},
    {Comb:[29,12,32,33], style: 'A|⊞', quad: 'A2'},
    {Comb:[29,30,5,33], style: 'A|⊞', quad: 'A2'},
    {Comb:[29,30,32,4], style: 'A|⊞', quad: 'A2'},
    {Comb:[17,32,34,35], style: 'A⊞|', quad: 'A2'},
    {Comb:[31,5,34,35], style: 'A⊞|', quad: 'A2'},
    {Comb:[31,32,9,35], style: 'A⊞|', quad: 'A2'},
    {Comb:[31,32,34,8], style: 'A⊞|', quad: 'A2'},
    {Comb:[5,33,35,36], style: 'A|⊞', quad: 'A2'},
    {Comb:[32,4,35,36], style: 'A|⊞', quad: 'A2'},
    {Comb:[32,33,8,36], style: 'A|⊞', quad: 'A2'},
    {Comb:[32,33,35,7], style: 'A|⊞', quad: 'A2'},
    {Comb:[0,26,20,30], style: 'A0s', quad: 'A5'},
    {Comb:[0,10,2,30], style: 'A0s', quad: 'A5'},
    {Comb:[0,10,20,12], style: 'A0s', quad: 'A5'},
    {Comb:[21,11,21,31], style: 'A1s', quad: 'A5'},
    {Comb:[1,28,21,31], style: 'A1s', quad: 'A5'},
    {Comb:[1,11,1,31], style: 'A1s', quad: 'A5'},
    {Comb:[1,11,21,17], style: 'A1s', quad: 'A5'},
    {Comb:[20,12,22,32], style: 'A2s', quad: 'A5'},
    {Comb:[2,30,22,32], style: 'A2s', quad: 'A5'},
    {Comb:[2,12,6,32], style: 'A2s', quad: 'A5'},
    {Comb:[2,12,22,5], style: 'A2s', quad: 'A5'},
    {Comb:[23,13,23,33], style: 'A3s', quad: 'A5'},
    {Comb:[3,29,23,33], style: 'A3s', quad: 'A5'},
    {Comb:[3,13,3,33], style: 'A3s', quad: 'A5'},
    {Comb:[3,13,23,4], style: 'A3s', quad: 'A5'},
    {Comb:[33,14,24,34], style: 'A4s', quad: 'A5'},
    {Comb:[22,14,24,34], style: 'A4s', quad: 'A5'},
    {Comb:[4,25,24,34], style: 'A4s', quad: 'A5'},
    {Comb:[4,14,15,34], style: 'A4s', quad: 'A5'},
    {Comb:[4,14,24,9], style: 'A4s', quad: 'A5'},
    {Comb:[32,15,25,35], style: 'A5s', quad: 'A5'},
    {Comb:[5,24,25,35], style: 'A5s', quad: 'A5'},
    {Comb:[5,15,14,35], style: 'A5s', quad: 'A5'},
    {Comb:[5,15,25,8], style: 'A5s', quad: 'A5'},
    {Comb:[22,16,26,36], style: 'A6s', quad: 'A5'},
    {Comb:[33,16,26,36], style: 'A6s', quad: 'A5'},
    {Comb:[6,19,26,36], style: 'A6s', quad: 'A5'},
    {Comb:[6,16,10,36], style: 'A6s', quad: 'A5'},
    {Comb:[6,16,26,7], style: 'A6s', quad: 'A5'},
    {Comb:[36,17,27], style: 'A7s', quad: 'A5'},
    {Comb:[7,31,27], style: 'A7s', quad: 'A5'},
    {Comb:[7,17,18], style: 'A7s', quad: 'A5'},
    {Comb:[35,18,28], style: 'A8s', quad: 'A5'},
    {Comb:[8,27,28], style: 'A8s', quad: 'A5'},
    {Comb:[8,18,11], style: 'A8s', quad: 'A5'},
    {Comb:[34,19,29], style: 'A9s', quad: 'A5'},
    {Comb:[9,16,29], style: 'A9s', quad: 'A5'},
    {Comb:[9,19,13], style: 'A9s', quad: 'A5'},
    {Comb:[21,3,5,7,9], style: 'Ax', quad: 'A1'},
    {Comb:[1,23,5,7,9], style: 'Ax', quad: 'A1'},
    {Comb:[1,3,32,7,9], style: 'Ax', quad: 'A1'},
    {Comb:[1,3,5,36,9], style: 'Ax', quad: 'A1'},
    {Comb:[1,3,5,7,34], style: 'Ax', quad: 'A1'},
    {Comb:[22,6,8,10,12], style: 'Ax', quad: 'A1'},
    {Comb:[33,6,8,10,12], style: 'Ax', quad: 'A1'},
    {Comb:[4,22,8,10,12], style: 'Ax', quad: 'A1'},
    {Comb:[4,6,35,10,12], style: 'Ax', quad: 'A1'},
    {Comb:[4,6,8,26,12], style: 'Ax', quad: 'A1'},
    {Comb:[4,6,8,10,30], style: 'Ax', quad: 'A1'},
    {Comb:[36,9,11,13,15], style: 'Ax', quad: 'A1'},
    {Comb:[7,34,11,13,15], style: 'Ax', quad: 'A1'},
    {Comb:[7,9,28,13,15], style: 'Ax', quad: 'A1'},
    {Comb:[7,9,11,29,15], style: 'Ax', quad: 'A1'},
    {Comb:[7,9,11,13,24], style: 'Ax', quad: 'A1'},
    {Comb:[26,12,14,16,18], style: 'Ax', quad: 'A1'},
    {Comb:[10,30,14,16,18], style: 'Ax', quad: 'A1'},
    {Comb:[10,26,14,16,18], style: 'Ax', quad: 'A1'},
    {Comb:[10,34,14,16,18], style: 'Ax', quad: 'A1'},
    {Comb:[10,12,25,16,18], style: 'Ax', quad: 'A1'},
    {Comb:[10,12,14,19,18], style: 'Ax', quad: 'A1'},
    {Comb:[10,12,14,16,27], style: 'Ax', quad: 'A1'},
    {Comb:[29,15,17,19,21], style: 'Ax', quad: 'A1'},
    {Comb:[13,24,17,19,21], style: 'Ax', quad: 'A1'},
    {Comb:[13,15,31,19,21], style: 'Ax', quad: 'A1'},
    {Comb:[13,15,17,16,21], style: 'Ax', quad: 'A1'},
    {Comb:[13,15,17,19,1], style: 'Ax', quad: 'A1'},
    {Comb:[19,18,20,22,24], style: 'Ax', quad: 'A1'},
    {Comb:[16,27,20,22,24], style: 'Ax', quad: 'A1'},
    {Comb:[16,18,2,22,24], style: 'Ax', quad: 'A1'},
    {Comb:[16,18,20,6,24], style: 'Ax', quad: 'A1'},
    {Comb:[16,18,20,4,24], style: 'Ax', quad: 'A1'},
    {Comb:[16,18,20,22,15], style: 'Ax', quad: 'A1'},
    {Comb:[16,21,23,25,27], style: 'Ax', quad: 'A1'},
    {Comb:[19,1,23,25,27], style: 'Ax', quad: 'A1'},
    {Comb:[19,21,3,25,27], style: 'Ax', quad: 'A1'},
    {Comb:[19,21,23,14,27], style: 'Ax', quad: 'A1'},
    {Comb:[19,21,23,25,18], style: 'Ax', quad: 'A1'},
    {Comb:[4,24,26,28,30], style: 'Ax', quad: 'A1'},
    {Comb:[6,24,26,28,30], style: 'Ax', quad: 'A1'},
    {Comb:[22,15,26,28,30], style: 'Ax', quad: 'A1'},
    {Comb:[22,24,10,28,30], style: 'Ax', quad: 'A1'},
    {Comb:[22,24,26,11,30], style: 'Ax', quad: 'A1'},
    {Comb:[22,24,26,28,12], style: 'Ax', quad: 'A1'},
    {Comb:[14,27,29,31,33], style: 'Ax', quad: 'A1'},
    {Comb:[25,18,29,31,33], style: 'Ax', quad: 'A1'},
    {Comb:[25,27,13,31,33], style: 'Ax', quad: 'A1'},
    {Comb:[25,27,29,17,33], style: 'Ax', quad: 'A1'},
    {Comb:[25,27,29,31,4], style: 'Ax', quad: 'A1'},
    {Comb:[11,30,32,34,36], style: 'Ax', quad: 'A1'},
    {Comb:[28,12,32,34,36], style: 'Ax', quad: 'A1'},
    {Comb:[28,30,5,34,36], style: 'Ax', quad: 'A1'},
    {Comb:[28,30,32,9,36], style: 'Ax', quad: 'A1'},
    {Comb:[28,30,32,34,7], style: 'Ax', quad: 'A1'},
    {Comb:[0,21,2,3,5], style: 'A✜', quad: 'A1'},
    {Comb:[0,2,20,3,5], style: 'A✜', quad: 'A1'},
    {Comb:[0,1,2,23,5], style: 'A✜', quad: 'A1'},
    {Comb:[0,1,2,3,32], style: 'A✜', quad: 'A1'},
    {Comb:[20,4,5,6,8], style: 'A✜', quad: 'A1'},
    {Comb:[2,33,5,6,8], style: 'A✜', quad: 'A1'},
    {Comb:[2,4,32,6,8], style: 'A✜', quad: 'A1'},
    {Comb:[2,4,5,22,8], style: 'A✜', quad: 'A1'},
    {Comb:[2,4,5,6,35], style: 'A✜', quad: 'A1'},
    {Comb:[32,7,8,9,11], style: 'A✜', quad: 'A1'},
    {Comb:[5,36,8,9,11], style: 'A✜', quad: 'A1'},
    {Comb:[5,7,35,9,11], style: 'A✜', quad: 'A1'},
    {Comb:[5,7,8,34,11], style: 'A✜', quad: 'A1'},
    {Comb:[5,7,8,9,28], style: 'A✜', quad: 'A1'},
    {Comb:[35,10,11,12,14], style: 'A✜', quad: 'A1'},
    {Comb:[8,26,11,12,14], style: 'A✜', quad: 'A1'},
    {Comb:[8,10,28,12,14], style: 'A✜', quad: 'A1'},
    {Comb:[8,10,11,30,14], style: 'A✜', quad: 'A1'},
    {Comb:[8,10,11,12,17], style: 'A✜', quad: 'A1'},
    {Comb:[28,13,14,15,17], style: 'A✜', quad: 'A1'},
    {Comb:[11,29,14,15,17], style: 'A✜', quad: 'A1'},
    {Comb:[11,13,25,15,17], style: 'A✜', quad: 'A1'},
    {Comb:[11,13,14,24,17], style: 'A✜', quad: 'A1'},
    {Comb:[11,13,14,15,31], style: 'A✜', quad: 'A1'},
    {Comb:[25,16,17,18,20], style: 'A✜', quad: 'A1'},
    {Comb:[14,19,17,18,20], style: 'A✜', quad: 'A1'},
    {Comb:[14,16,31,18,20], style: 'A✜', quad: 'A1'},
    {Comb:[14,16,17,27,20], style: 'A✜', quad: 'A1'},
    {Comb:[14,16,17,18,2], style: 'A✜', quad: 'A1'},
    {Comb:[31,19,20,21,23], style: 'A✜', quad: 'A1'},
    {Comb:[17,16,20,21,23], style: 'A✜', quad: 'A1'},
    {Comb:[17,19,2,21,23], style: 'A✜', quad: 'A1'},
    {Comb:[17,19,20,1,23], style: 'A✜', quad: 'A1'},
    {Comb:[17,19,20,21,3], style: 'A✜', quad: 'A1'},
    {Comb:[2,22,23,24,26], style: 'A✜', quad: 'A1'},
    {Comb:[20,4,23,24,26], style: 'A✜', quad: 'A1'},
    {Comb:[20,6,23,24,26], style: 'A✜', quad: 'A1'},
    {Comb:[20,22,3,24,26], style: 'A✜', quad: 'A1'},
    {Comb:[20,22,23,15,26], style: 'A✜', quad: 'A1'},
    {Comb:[20,22,23,24,10], style: 'A✜', quad: 'A1'},
    {Comb:[3,25,26,27,29], style: 'A✜', quad: 'A1'},
    {Comb:[23,14,26,27,29], style: 'A✜', quad: 'A1'},
    {Comb:[23,25,10,27,29], style: 'A✜', quad: 'A1'},
    {Comb:[23,25,26,18,29], style: 'A✜', quad: 'A1'},
    {Comb:[23,25,26,27,13], style: 'A✜', quad: 'A1'},
    {Comb:[10,28,29,30,32], style: 'A✜', quad: 'A1'},
    {Comb:[26,11,29,30,32], style: 'A✜', quad: 'A1'},
    {Comb:[26,28,13,30,32], style: 'A✜', quad: 'A1'},
    {Comb:[26,28,29,12,32], style: 'A✜', quad: 'A1'},
    {Comb:[26,28,29,30,5], style: 'A✜', quad: 'A1'},
    {Comb:[13,31,32,33,35], style: 'A✜', quad: 'A1'},
    {Comb:[29,17,32,33,35], style: 'A✜', quad: 'A1'},
    {Comb:[29,31,5,33,35], style: 'A✜', quad: 'A1'},
    {Comb:[29,31,32,4,35], style: 'A✜', quad: 'A1'},
    {Comb:[29,31,32,33,8], style: 'A✜', quad: 'A1'},
    {Comb:[21,5,9], style: 'A╲', quad: 'A3'},
    {Comb:[1,32,9], style: 'A╲', quad: 'A3'},
    {Comb:[1,5,34], style: 'A╲', quad: 'A3'},
    {Comb:[23,5,7], style: 'A╱', quad: 'A3'},
    {Comb:[3,32,7], style: 'A╱', quad: 'A3'},
    {Comb:[3,5,36], style: 'A╱', quad: 'A3'},
    {Comb:[33,8,12], style: 'A╲', quad: 'A3'},
    {Comb:[4,35,12], style: 'A╲', quad: 'A3'},
    {Comb:[4,8,30], style: 'A╲', quad: 'A3'},
    {Comb:[22,8,10], style: 'A╱', quad: 'A3'},
    {Comb:[6,35,10], style: 'A╱', quad: 'A3'},
    {Comb:[6,8,26], style: 'A╱', quad: 'A3'},
    {Comb:[36,11,15], style: 'A╲', quad: 'A3'},
    {Comb:[7,28,15], style: 'A╲', quad: 'A3'},
    {Comb:[7,11,24], style: 'A╲', quad: 'A3'},
    {Comb:[34,11,13], style: 'A╱', quad: 'A3'},
    {Comb:[9,28,13], style: 'A╱', quad: 'A3'},
    {Comb:[9,11,29], style: 'A╱', quad: 'A3'},
    {Comb:[26,14,18], style: 'A╲', quad: 'A3'},
    {Comb:[10,25,18], style: 'A╲', quad: 'A3'},
    {Comb:[10,14,27], style: 'A╲', quad: 'A3'},
    {Comb:[30,14,16], style: 'A╱', quad: 'A3'},
    {Comb:[12,25,16], style: 'A╱', quad: 'A3'},
    {Comb:[12,14,19], style: 'A╱', quad: 'A3'},
    {Comb:[29,17,21], style: 'A╲', quad: 'A3'},
    {Comb:[13,31,21], style: 'A╲', quad: 'A3'},
    {Comb:[13,17,1], style: 'A╲', quad: 'A3'},
    {Comb:[24,17,19], style: 'A╱', quad: 'A3'},
    {Comb:[15,31,19], style: 'A╱', quad: 'A3'},
    {Comb:[15,17,16], style: 'A╱', quad: 'A3'},
    {Comb:[19,20,24], style: 'A╲', quad: 'A3'},
    {Comb:[16,2,24], style: 'A╲', quad: 'A3'},
    {Comb:[16,20,15], style: 'A╲', quad: 'A3'},
    {Comb:[27,20,22], style: 'A╱', quad: 'A3'},
    {Comb:[18,2,22], style: 'A╱', quad: 'A3'},
    {Comb:[18,20,6], style: 'A╱', quad: 'A3'},
    {Comb:[6,26,30], style: 'A╲', quad: 'A3'},
    {Comb:[22,10,30], style: 'A╲', quad: 'A3'},
    {Comb:[22,26,12], style: 'A╲', quad: 'A3'},
    {Comb:[15,26,28], style: 'A╱', quad: 'A3'},
    {Comb:[24,10,28], style: 'A╱', quad: 'A3'},
    {Comb:[24,26,11], style: 'A╱', quad: 'A3'},
    {Comb:[14,29,33], style: 'A╲', quad: 'A3'},
    {Comb:[25,13,33], style: 'A╲', quad: 'A3'},
    {Comb:[25,29,4], style: 'A╲', quad: 'A3'},
    {Comb:[18,29,31], style: 'A╱', quad: 'A3'},
    {Comb:[27,13,31], style: 'A╱', quad: 'A3'},
    {Comb:[27,29,17], style: 'A╱', quad: 'A3'},
    {Comb:[11,32,36], style: 'A╲', quad: 'A3'},
    {Comb:[28,5,36], style: 'A╲', quad: 'A3'},
    {Comb:[28,32,7], style: 'A╲', quad: 'A3'},
    {Comb:[12,32,34], style: 'A╱', quad: 'A3'},
    {Comb:[30,5,34], style: 'A╱', quad: 'A3'},
    {Comb:[30,32,9], style: 'A╱', quad: 'A3'},
    {Comb:[21,2,3], style: 'ABIN', quad: 'A4'},
    {Comb:[1,20,3], style: 'ABIN', quad: 'A4'},
    {Comb:[1,2,23], style: 'ABIN', quad: 'A4'},
    {Comb:[20,3,4], style: 'ABIN', quad: 'A4'},
    {Comb:[2,23,4], style: 'ABIN', quad: 'A4'},
    {Comb:[2,3,33], style: 'ABIN', quad: 'A4'},
    {Comb:[23,4,5], style: 'ABIN', quad: 'A4'},
    {Comb:[3,33,5], style: 'ABIN', quad: 'A4'},
    {Comb:[3,4,32], style: 'ABIN', quad: 'A4'},
    {Comb:[33,5,6], style: 'ABIN', quad: 'A4'},
    {Comb:[4,32,6], style: 'ABIN', quad: 'A4'},
    {Comb:[4,5,22], style: 'ABIN', quad: 'A4'},
    {Comb:[32,6,7], style: 'ABIN', quad: 'A4'},
    {Comb:[5,22,7], style: 'ABIN', quad: 'A4'},
    {Comb:[5,6,36], style: 'ABIN', quad: 'A4'},
    {Comb:[22,7,8], style: 'ABIN', quad: 'A4'},
    {Comb:[6,36,8], style: 'ABIN', quad: 'A4'},
    {Comb:[6,7,35], style: 'ABIN', quad: 'A4'},
    {Comb:[36,8,9], style: 'ABIN', quad: 'A4'},
    {Comb:[7,35,9], style: 'ABIN', quad: 'A4'},
    {Comb:[7,8,34], style: 'ABIN', quad: 'A4'},
    {Comb:[35,9,10], style: 'ABIN', quad: 'A4'},
    {Comb:[8,34,10], style: 'ABIN', quad: 'A4'},
    {Comb:[8,3,26], style: 'ABIN', quad: 'A4'},
    {Comb:[34,10,11], style: 'ABIN', quad: 'A4'},
    {Comb:[9,26,11], style: 'ABIN', quad: 'A4'},
    {Comb:[9,10,28], style: 'ABIN', quad: 'A4'},
    {Comb:[26,11,12], style: 'ABIN', quad: 'A4'},
    {Comb:[10,28,12], style: 'ABIN', quad: 'A4'},
    {Comb:[10,11,30], style: 'ABIN', quad: 'A4'},
    {Comb:[28,12,13], style: 'ABIN', quad: 'A4'},
    {Comb:[11,30,13], style: 'ABIN', quad: 'A4'},
    {Comb:[11,12,29], style: 'ABIN', quad: 'A4'},
    {Comb:[30,13,14], style: 'ABIN', quad: 'A4'},
    {Comb:[12,29,14], style: 'ABIN', quad: 'A4'},
    {Comb:[12,13,25], style: 'ABIN', quad: 'A4'},
    {Comb:[25,15,16], style: 'ABIN', quad: 'A4'},
    {Comb:[14,24,16], style: 'ABIN', quad: 'A4'},
    {Comb:[14,15,19], style: 'ABIN', quad: 'A4'},
    {Comb:[24,16,17], style: 'ABIN', quad: 'A4'},
    {Comb:[15,19,17], style: 'ABIN', quad: 'A4'},
    {Comb:[15,16,31], style: 'ABIN', quad: 'A4'},
    {Comb:[31,18,19], style: 'ABIN', quad: 'A4'},
    {Comb:[17,27,19], style: 'ABIN', quad: 'A4'},
    {Comb:[17,18,16], style: 'ABIN', quad: 'A4'},
    {Comb:[27,19,20], style: 'ABIN', quad: 'A4'},
    {Comb:[18,16,20], style: 'ABIN', quad: 'A4'},
    {Comb:[18,19,2], style: 'ABIN', quad: 'A4'},
    {Comb:[16,20,21], style: 'ABIN', quad: 'A4'},
    {Comb:[19,2,21], style: 'ABIN', quad: 'A4'},
    {Comb:[19,20,1], style: 'ABIN', quad: 'A4'},
    {Comb:[2,21,22], style: 'ABIN', quad: 'A4'},
    {Comb:[20,1,22], style: 'ABIN', quad: 'A4'},
    {Comb:[20,21,6], style: 'ABIN', quad: 'A4'},
    {Comb:[1,22,23], style: 'ABIN', quad: 'A4'},
    {Comb:[21,6,23], style: 'ABIN', quad: 'A4'},
    {Comb:[21,22,3], style: 'ABIN', quad: 'A4'},
    {Comb:[6,23,24], style: 'ABIN', quad: 'A4'},
    {Comb:[22,3,24], style: 'ABIN', quad: 'A4'},
    {Comb:[22,23,15], style: 'ABIN', quad: 'A4'},
    {Comb:[3,24,25], style: 'ABIN', quad: 'A4'},
    {Comb:[23,15,25], style: 'ABIN', quad: 'A4'},
    {Comb:[23,24,14], style: 'ABIN', quad: 'A4'},
    {Comb:[15,25,26], style: 'ABIN', quad: 'A4'},
    {Comb:[24,14,26], style: 'ABIN', quad: 'A4'},
    {Comb:[24,25,10], style: 'ABIN', quad: 'A4'},
    {Comb:[14,26,27], style: 'ABIN', quad: 'A4'},
    {Comb:[25,10,27], style: 'ABIN', quad: 'A4'},
    {Comb:[25,26,18], style: 'ABIN', quad: 'A4'},
    {Comb:[10,27,28], style: 'ABIN', quad: 'A4'},
    {Comb:[26,18,28], style: 'ABIN', quad: 'A4'},
    {Comb:[26,27,11], style: 'ABIN', quad: 'A4'},
    {Comb:[18,28,29], style: 'ABIN', quad: 'A4'},
    {Comb:[27,11,29], style: 'ABIN', quad: 'A4'},
    {Comb:[27,28,13], style: 'ABIN', quad: 'A4'},
    {Comb:[11,29,30], style: 'ABIN', quad: 'A4'},
    {Comb:[28,13,30], style: 'ABIN', quad: 'A4'},
    {Comb:[28,29,12], style: 'ABIN', quad: 'A4'},
    {Comb:[13,30,31], style: 'ABIN', quad: 'A4'},
    {Comb:[29,12,31], style: 'ABIN', quad: 'A4'},
    {Comb:[29,30,17], style: 'ABIN', quad: 'A4'},
    {Comb:[12,31,32], style: 'ABIN', quad: 'A4'},
    {Comb:[30,17,32], style: 'ABIN', quad: 'A4'},
    {Comb:[30,31,5], style: 'ABIN', quad: 'A4'},
    {Comb:[17,32,33], style: 'ABIN', quad: 'A4'},
    {Comb:[31,5,33], style: 'ABIN', quad: 'A4'},
    {Comb:[31,32,4], style: 'ABIN', quad: 'A4'},
    {Comb:[5,33,34], style: 'ABIN', quad: 'A4'},
    {Comb:[32,4,34], style: 'ABIN', quad: 'A4'},
    {Comb:[32,33,9], style: 'ABIN', quad: 'A4'},
    {Comb:[4,34,35], style: 'ABIN', quad: 'A4'},
    {Comb:[33,9,35], style: 'ABIN', quad: 'A4'},
    {Comb:[33,34,8], style: 'ABIN', quad: 'A4'},
    {Comb:[9,35,36], style: 'ABIN', quad: 'A4'},
    {Comb:[34,8,36], style: 'ABIN', quad: 'A4'},
    {Comb:[34,35,7], style: 'ABIN', quad: 'A4'},
	{Comb:[21,2,3,4,5,6], style: 'A=', quad: 'A1'},
	{Comb:[1,20,3,4,5,6], style: 'A=', quad: 'A1'},
	{Comb:[1,2,23,4,5,6], style: 'A=', quad: 'A1'},
	{Comb:[1,2,3,22,5,6], style: 'A=', quad: 'A1'},
	{Comb:[1,2,3,33,5,6], style: 'A=', quad: 'A1'},
	{Comb:[1,2,3,4,32,6], style: 'A=', quad: 'A1'},
	{Comb:[1,2,3,4,23,6], style: 'A=', quad: 'A1'},
	{Comb:[1,2,3,4,5,22], style: 'A=', quad: 'A1'},
	{Comb:[1,2,3,4,5,33], style: 'A=', quad: 'A1'},
    {Comb:[33,5,6,7,8,9], style: 'A=', quad: 'A1'},
    {Comb:[22,5,6,7,8,9], style: 'A=', quad: 'A1'},
    {Comb:[4,32,6,7,8,9], style: 'A=', quad: 'A1'},
    {Comb:[4,23,6,7,8,9], style: 'A=', quad: 'A1'},
    {Comb:[4,5,22,7,8,9], style: 'A=', quad: 'A1'},
    {Comb:[4,5,33,7,8,9], style: 'A=', quad: 'A1'},
    {Comb:[4,5,6,36,8,9], style: 'A=', quad: 'A1'},
    {Comb:[4,5,6,7,35,9], style: 'A=', quad: 'A1'},
    {Comb:[4,5,6,7,8,34], style: 'A=', quad: 'A1'},
    {Comb:[36,8,9,10,11,12], style: 'A=', quad: 'A1'},
    {Comb:[7,35,9,10,11,12], style: 'A=', quad: 'A1'},
    {Comb:[7,8,34,10,11,12], style: 'A=', quad: 'A1'},
    {Comb:[7,8,9,26,11,12], style: 'A=', quad: 'A1'},
    {Comb:[7,8,9,10,28,12], style: 'A=', quad: 'A1'},
    {Comb:[7,8,9,10,28,26], style: 'A=', quad: 'A1'},
    {Comb:[7,8,9,10,28,34], style: 'A=', quad: 'A1'},
    {Comb:[7,8,9,10,28,21], style: 'A=', quad: 'A1'},
    {Comb:[7,8,9,10,11,30], style: 'A=', quad: 'A1'},
    {Comb:[26,11,12,13,14,15], style: 'A=', quad: 'A1'},
    {Comb:[10,28,12,13,14,15], style: 'A=', quad: 'A1'},
    {Comb:[10,11,30,13,14,15], style: 'A=', quad: 'A1'},
    {Comb:[10,11,12,29,14,15], style: 'A=', quad: 'A1'},
    {Comb:[10,11,12,13,25,15], style: 'A=', quad: 'A1'},
    {Comb:[10,11,12,13,25,35], style: 'A=', quad: 'A1'},
    {Comb:[10,11,12,13,14,24], style: 'A=', quad: 'A1'},
    {Comb:[29,14,15,16,17,18], style: 'A=', quad: 'A1'},
    {Comb:[13,27,15,16,17,18], style: 'A=', quad: 'A1'},
    {Comb:[13,25,15,16,17,18], style: 'A=', quad: 'A1'},
    {Comb:[13,14,24,16,17,18], style: 'A=', quad: 'A1'},
    {Comb:[13,14,15,19,17,18], style: 'A=', quad: 'A1'},
    {Comb:[13,14,15,19,1,18], style: 'A=', quad: 'A1'},
    {Comb:[13,14,15,16,31,18], style: 'A=', quad: 'A1'},
    {Comb:[13,14,15,16,17,27], style: 'A=', quad: 'A1'},
    {Comb:[19,17,18,19,20,21], style: 'A=', quad: 'A1'},
    {Comb:[16,1,18,19,20,21], style: 'A=', quad: 'A1'},
    {Comb:[16,31,18,19,20,21], style: 'A=', quad: 'A1'},
    {Comb:[16,17,27,19,20,21], style: 'A=', quad: 'A1'},
    {Comb:[16,17,18,16,20,21], style: 'A=', quad: 'A1'},
    {Comb:[16,17,18,19,2,21], style: 'A=', quad: 'A1'},
    {Comb:[16,17,18,19,20,12], style: 'A=', quad: 'A1'},
    {Comb:[16,17,18,19,20,1], style: 'A=', quad: 'A1'},
    {Comb:[16,20,21,22,23,24], style: 'A=', quad: 'A1'},
    {Comb:[19,2,21,22,23,24], style: 'A=', quad: 'A1'},
    {Comb:[19,20,1,22,23,24], style: 'A=', quad: 'A1'},
    {Comb:[19,20,12,22,23,24], style: 'A=', quad: 'A1'},
    {Comb:[19,20,21,6,23,24], style: 'A=', quad: 'A1'},
    {Comb:[19,20,21,4,23,24], style: 'A=', quad: 'A1'},
    {Comb:[19,20,21,33,23,24], style: 'A=', quad: 'A1'},
    {Comb:[19,20,21,22,5,24], style: 'A=', quad: 'A1'},
    {Comb:[19,20,21,22,32,24], style: 'A=', quad: 'A1'},
    {Comb:[19,20,21,22,23,15], style: 'A=', quad: 'A1'},
    {Comb:[4,23,24,25,26,27], style: 'A=', quad: 'A1'},
    {Comb:[6,23,24,25,26,27], style: 'A=', quad: 'A1'},
    {Comb:[33,23,24,25,26,27], style: 'A=', quad: 'A1'},
    {Comb:[22,5,24,25,26,27], style: 'A=', quad: 'A1'},
    {Comb:[22,32,24,25,26,27], style: 'A=', quad: 'A1'},
    {Comb:[22,23,15,25,26,27], style: 'A=', quad: 'A1'},
    {Comb:[22,23,24,14,26,27], style: 'A=', quad: 'A1'},
    {Comb:[22,23,24,25,12,27], style: 'A=', quad: 'A1'},
    {Comb:[22,23,24,25,34,27], style: 'A=', quad: 'A1'},
    {Comb:[22,23,24,25,26,18], style: 'A=', quad: 'A1'},
    {Comb:[14,26,27,28,29,30], style: 'A=', quad: 'A1'},
    {Comb:[25,12,27,28,29,30], style: 'A=', quad: 'A1'},
    {Comb:[25,34,27,28,29,30], style: 'A=', quad: 'A1'},
    {Comb:[25,26,18,28,29,30], style: 'A=', quad: 'A1'},
    {Comb:[25,26,27,11,29,30], style: 'A=', quad: 'A1'},
    {Comb:[25,26,27,28,13,30], style: 'A=', quad: 'A1'},
    {Comb:[25,26,27,28,29,12], style: 'A=', quad: 'A1'},
    {Comb:[11,29,30,31,32,33], style: 'A=', quad: 'A1'},
    {Comb:[28,13,30,31,32,33], style: 'A=', quad: 'A1'},
    {Comb:[28,29,12,31,32,33], style: 'A=', quad: 'A1'},
    {Comb:[28,29,30,17,32,33], style: 'A=', quad: 'A1'},
    {Comb:[28,29,30,13,32,33], style: 'A=', quad: 'A1'},
    {Comb:[28,29,30,31,23,33], style: 'A=', quad: 'A1'},
    {Comb:[28,29,30,31,5,33], style: 'A=', quad: 'A1'},
    {Comb:[28,29,30,31,32,4], style: 'A=', quad: 'A1'},
    {Comb:[28,29,30,31,32,6], style: 'A=', quad: 'A1'},
    {Comb:[17,32,33,34,35,36], style: 'A=', quad: 'A1'},
    {Comb:[13,32,33,34,35,36], style: 'A=', quad: 'A1'},
    {Comb:[31,23,33,34,35,36], style: 'A=', quad: 'A1'},
    {Comb:[31,5,33,34,35,36], style: 'A=', quad: 'A1'},
    {Comb:[31,32,4,34,35,36], style: 'A=', quad: 'A1'},
    {Comb:[31,32,6,34,35,36], style: 'A=', quad: 'A1'},
    {Comb:[31,32,33,9,35,36], style: 'A=', quad: 'A1'},
    {Comb:[31,32,33,34,8,36], style: 'A=', quad: 'A1'},
    {Comb:[31,32,33,34,35,7], style: 'A=', quad: 'A1'}
];

  const Opposites = [
    {num:'32', opp: '5'},
    {num:'15', opp: '24'},
    {num:'19', opp: '16'},
    {num:'4', opp: '33'},
    {num:'21', opp: '1'},
    {num:'2', opp: '20'},
    {num:'25', opp: '14'},
    {num:'17', opp: '31'},
    {num:'34', opp: '9'},
    {num:'6', opp: '22'},
    {num:'27', opp: '18'},
    {num:'13', opp: '29'},
    {num:'36', opp: '7'},
    {num:'11', opp: '28'},
    {num:'30', opp: '12'},
    {num:'8', opp: '35'},
    {num:'23', opp: '3'},
    {num:'10', opp: '26'},
    {num:'5', opp: '32'},
    {num:'24', opp: '15'},
    {num:'16', opp: '19'},
    {num:'33', opp: '4'},
    {num:'1', opp: '21'},
    {num:'20', opp: '2'},
    {num:'14', opp: '25'},
    {num:'31', opp: '17'},
    {num:'9', opp: '34'},
    {num:'22', opp: '6'},
    {num:'18', opp: '27'},
    {num:'29', opp: '13'},
    {num:'7', opp: '36'},
    {num:'28', opp: '11'},
    {num:'12', opp: '30'},
    {num:'35', opp: '8'},
    {num:'3', opp: '23'},
    {num:'26', opp: '10'}
  ];

    useEffect(() => {
      const temp3array: finalResult[] = [];
      const temp3BINarray: finalResult[] = [];
      const temp3Quadarray: finalResult[] = [];
      const temp3Stylearray: finalResult[] = [];
      const temp3Comarray: finalResult[] = [];
      const temp5array: finalResult[] = [];
      const temp5BINarray: finalResult[] = [];
      const temp5Stylearray: finalResult[] = [];
      const tempaltarray: finalResult[] = [];
      const mustArray: number[][] = [];
      const quadArray: number[][] = [];
      const binArray: number[][] = [];
      const styleArray: number[][] = [];
      const comArray: number[][] = [];

      combinations.forEach(combination => {
        console.log(`Checking data item value: ${combination}`);
        const foundResultThree = CheckforCombination(combination.Comb, 3, data, neigArray);
        const splitResult = foundResultThree.split('--');
        if(foundResultThree != ''){
          const tempNearVals = filterNeigArray(neigArray, '3', splitResult[1].toString());
          const trimmedString = tempNearVals.replace(/^,|,$/g, '');
          const numberArray = trimmedString.split(',').map(Number);
          if(combination.quad === '1' || combination.quad === 'A1'){
            temp3array.push({Combination: splitResult[0], Style: combination.style, Missing: splitResult[1]});
            mustArray.push(numberArray);
          }else if(combination.quad === '2' || combination.quad === 'A2'){
            temp3Quadarray.push({Combination: splitResult[0], Style: combination.style, Missing: splitResult[1]});
            quadArray.push(numberArray);
          }else if(combination.quad === '3' || combination.quad === 'A3'){
            temp3Stylearray.push({Combination: splitResult[0], Style: combination.style, Missing: splitResult[1]});
            styleArray.push(numberArray);
          }else if(combination.quad === '4' || combination.quad === 'A4'){
            temp3BINarray.push({Combination: splitResult[0], Style: combination.style, Missing: splitResult[1]});
            binArray.push(numberArray);
          }else {
            temp3Comarray.push({Combination: splitResult[0], Style: combination.style, Missing: splitResult[1]});
            comArray.push(numberArray);
          }
        }
      });
      
      if(data.length > 0){
        let firstNo: string = data[0].value;
        let secondNo: string = data[0].value;
        let thirdNo: string = data[0].value;
      }

      tempaltarray.push({
        Combination: 'Must', Missing: mustArray.join('--'),
        Style: ''
      });
      tempaltarray.push({
        Combination: 'QUAD', Missing: quadArray.join('--'),
        Style: ''
      });
      tempaltarray.push({
        Combination: 'Com', Missing: comArray.join('--'),
        Style: ''
      });
      tempaltarray.push({
        Combination: 'Style', Missing: styleArray.join('--'),
        Style: ''
      });
      tempaltarray.push({
        Combination: 'BIN', Missing: binArray.join('--'),
        Style: ''
      });

      const customSort = (a: finalResult, b: finalResult) => {
        const isAlpha = (char: string) => /^[A-Za-z]+$/.test(char);
        
        if (isAlpha(a.Style[0]) && !isAlpha(b.Style[0])) return -1;
        if (!isAlpha(a.Style[0]) && isAlpha(b.Style[0])) return 1;
        return a.Style.localeCompare(b.Style);
      }
      set3CheckArray(temp3array.sort(customSort));
      set3BINArray(temp3BINarray.sort(customSort));
      set3StyleArray(temp3Stylearray.sort(customSort));
      set3QuadArray(temp3Quadarray.sort(customSort));
      set3ComArray(temp3Comarray.sort(customSort));
      setAltCheckArray(tempaltarray);      
  }, [data]);

  return (
    <div>
      <table>
      <tr>
          <td style={{ verticalAlign:'top' }}>
            <table style={{ border: '1px solid black', width: '250px', borderCollapse: 'collapse', marginBottom:'5px' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Bin</th>
                  </tr>
                </thead>
                <tbody>
                  {ThreeBINArray.map((item, index) => (
                    <tr key={index}>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{item.Combination}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{item.Style}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{item.Missing}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
            <table style={{ border: '1px solid black', width: '250px', borderCollapse: 'collapse', marginBottom:'5px' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Com</th>
                  </tr>
                </thead>
                <tbody>
                  {ThreeComArray.map((item, index) => (
                    <tr key={index}>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{item.Combination}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{item.Style}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{item.Missing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </td>
          <td>
            <table style={{ border: '1px solid black', width: '250px', borderCollapse: 'collapse', marginBottom:'5px' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Must</th>
                  </tr>
                </thead>
                <tbody>
                  {ThreeCheckArray.map((item, index) => (
                    <tr key={index}>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{item.Missing}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{item.Style}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{item.Combination}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
            <table style={{ border: '1px solid black', width: '250px', borderCollapse: 'collapse', marginBottom:'5px' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Quad</th>
                </tr>
              </thead>
              <tbody>
                {ThreeQuadArray.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Missing}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Style}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Combination}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table style={{ border: '1px solid black', width: '250px', borderCollapse: 'collapse', marginBottom:'5px' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Style</th>
                </tr>
              </thead>
              <tbody>
                {ThreeStyleArray.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Missing}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Style}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Combination}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TopThreeCheck;

function CheckforCombination(combination: number[], numlimit: number, data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string; wicCol: string; }[], neigArray: { numlimit: string; num: string; neigsStr: string; }[]) {
  const tempCombColl: number[] = [...combination];
  const foundCombColl: number[] = [];
  let resultStr = '';
  const topValues = data.slice(0, 12);
  let missingCount = 0;
  topValues.forEach(item => {
    if (!resultStr && missingCount < 1) {
      console.log(`Checking data item value: ${item.value}`);
      const foundCombiNum = CheckForCurrentValue(combination, item.value, numlimit, neigArray);
      if(foundCombiNum != ''){
        const num = parseInt(foundCombiNum);
        const indexInTemp = tempCombColl.indexOf(num); 
        if (indexInTemp !== -1) {
          tempCombColl.splice(indexInTemp, 1); 
          foundCombColl.push(num); 
          console.log(`Moved ${num} from tempCombColl to foundCombColl`);
        }else{
          const indexInFoundTemp = foundCombColl.indexOf(num); 
          if (indexInFoundTemp !== -1) {
          }
        }
      }else{
        if(tempCombColl.length == 1){
          resultStr = combination.toString() + '--' + tempCombColl[0].toString();
        }
        missingCount++;
      }
    }
  });
  return resultStr;
}

function CheckForCurrentValue(combination: number[], value: string, numlimit: number, neigArray: { numlimit: string; num: string; neigsStr: string; }[]) {
  let resultStr = '';
  combination.forEach(num => {
    if (!resultStr) {
      console.log(`Checking data combination num value: ${num}`);
      const filteredNeigsStr = filterNeigArray(neigArray, numlimit.toString(), num.toString());
      const tempStr = ',' + value + ',';
      const result = containsSubstring(filteredNeigsStr, tempStr);
      console.log(result);
      resultStr = result ? num.toString() : '';
    }
  });
  return resultStr;
}

function filterNeigArray(neigArray: { numlimit: string; num: string; neigsStr: string; }[], numlimitFilterVal: string, num: string): string { 
  const result = neigArray .filter(neig => neig.numlimit === numlimitFilterVal && neig.num === num) .map(neig => neig.neigsStr); 
  return result.length > 0 ? result[0] : '';
}

function containsSubstring(filteredNeigsStr: string, tempStr: string) {
  return filteredNeigsStr.includes(tempStr);
}

