import React from 'react';

const getStyleName = (btn) => {
  const className = {
    0: 'equals',
    '=': 'opt',
    x: 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
  };
  return className[btn];
};

function Button({ value }) {
  return (
    <button type="button" className={`${getStyleName(value)} button`}>{value}</button>
  );
}

export default Button;
