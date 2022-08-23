/* eslint no-eval: 0 */
import React from 'react';
import calculate from '../logic/calculate';

function Calc() {
  const [calc, setCalc] = useState(0);
  const handleBtnClick = (event) => {
    setCalc((calc) => calculate(calc, event.target.innerHTML));
  };
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === '')
      || (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i += 1) {
      digits.push(
        <button
          type="button"
          onClick={() => updateCalc(i.toString())}
          key={i}
        >
          {i}
        </button>,
      );
    }
    return digits;
  };

  return (
    <div>
      <Calc value="0" />
      <div>
        {result ? (
          <span>
            (
            {result}
            )
          </span>
        ) : ''}
        nbsp;
        {calc || '0'}
      </div>
      <div className="operators">
        <button type="button" onClick={handleBtnClick}>/</button>
        <button type="button" onClick={handleBtnClick}>*</button>
        <button type="button" onClick={handleBtnClick}>+</button>
        <button type="button" onClick={handleBtnClick}>-</button>
        <button type="button" onClick={handleBtnClick}>A/C</button>
      </div>
      <div className="digits">
        { createDigits() }
        <button type="button" onClick={handleBtnClick}>0</button>
        <button type="button" onClick={handleBtnClick}>=</button>
        <button type="button" onClick={handleBtnClick}>.</button>
      </div>
    </div>
  );
}

export default Calc;
