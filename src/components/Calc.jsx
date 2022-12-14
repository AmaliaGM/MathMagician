import React from 'react';
import Screen from './Screen';
import ButtonBox from './ButtonBox';
import Button from './Calculator';
import CalcProvider from '../logic/CalcContext';

const btnValues = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

function Calc() {
  return (
    <div className="calcContainer">
      <h2 className="lets">Let´s do some Math!</h2>
      <div>
        <CalcProvider>
          <div className="wrapper">
            <Screen />
            <ButtonBox>
              {btnValues.flat().map((btn) => (
                <Button
                  value={btn}
                  key={btn}
                />
              ))}
            </ButtonBox>
          </div>
        </CalcProvider>
      </div>
    </div>
  );
}

export default Calc;
