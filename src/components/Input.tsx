import React, { useState } from 'react';
import './InputFields.css';

interface InputFieldsProps {
  onAdd: (value: string) => void;
  onSubmit: (value: string, isChecked: boolean) => void;
  onEdit: () => string;
  data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string; wicCol: string }[];
}

const InputFields: React.FC<InputFieldsProps> = ({ onAdd, onSubmit, onEdit, data }) => {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const topData = data.slice(0, 20);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isSubmitDisabled || /^(3[0-6]|[0-2]?[0-9])?$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleAdd = () => {
    onAdd(inputValue);
    setInputValue('');
  };

  const handleSubmit = () => {
    onSubmit(inputValue, isChecked);
    setIsSubmitDisabled(!isSubmitDisabled);
    setInputValue('');
  };

  const handleEdit = () => {
    const editStr = onEdit();
    setInputValue(editStr);
  };

  const toggleSubmitButton = () => {
    setIsSubmitDisabled(!isSubmitDisabled);
  };

  return (
    <div>
      <table>
        <tr>
          <td>
          <div className="top-container">
              <input style={{ width: '250px' }}
                type="text"
                placeholder="Enter values with space starts with latest"
                value={inputValue}
                onChange={handleChange}
              />
              <button onClick={handleAdd}>Add</button>
              <button onClick={handleSubmit} disabled={isSubmitDisabled}>Submit</button>
            </div>
            <div className="input-container">
              <button onClick={toggleSubmitButton}>
                {isSubmitDisabled ? 'Enable Submit' : 'Disable Submit'}
              </button>
              <button onClick={handleEdit} disabled={isSubmitDisabled}>Edit</button>
            </div>
          </td>
          <td>
          <div>
            <table>
                <tr>
                     <td>
                        <div style={{ display: 'flex' }}>
                            {topData.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "White",
                                    color: getTextColor(item.col), 
                                    padding: '10px',
                                    border: '1px solid black',
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent: 'space-between'
                                }} >
                                <table>
                                    <tr>
                                        <td>
                                        <div style={{ textAlign: 'center' }}>{item.value}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><div style={{ flex: 1, paddingLeft: '5px', borderLeft: '1px solid black' }}>{getSection(item.isTi,item.isOrp,item.isVoz)}</div></td>
                                    </tr>
                                    <tr>
                                        <td><div style={{ flex: 1, paddingLeft: '5px', borderLeft: '1px solid black' }}>{getColumn(item.wicCol)}</div></td>
                                    </tr>
                                    <tr>
                                        <td><div style={{ flex: 1, paddingRight: '5px', borderLeft: '1px solid black'  }}>{item.sec.replace(/\./g,"")}</div></td>
                                    </tr>
                                </table>                                
                            </div> ))}
                        </div>
                    </td>
                </tr>
            </table>
        </div>
          </td>
        </tr>
      </table>
    </div>
    
  );
};

const getTextColor = (backgroundColor: string): string => { 
  switch (backgroundColor) { 
      case "REE": 
          return "Red"; 
      case "BLAAAAAA": 
          return "Black"; 
      case "GREEEEEEEEEE": 
          return "Green";
      default: return "black"; 
  }
};

const getSection = (isTi: string, isOrp: string, isVoz: string): string => { 
  if(isTi === "Yes"){
      return "Ti";
  }else if(isOrp === "Yes"){
      return "Or";
  }else if(isVoz === "Yes"){
      return "Vo";
  }else {
      return "";
  }
};

const getColumn = (whiCol: string): string => { 
  if(whiCol === "Ri"){
      return "R";
  }else if(whiCol === "Le"){
      return "L"; 
  }else if(whiCol === "Mi"){
      return "M";
  }else {
      return "";
  }
};

export default InputFields;
