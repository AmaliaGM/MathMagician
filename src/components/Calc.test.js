import React from 'react';
import { render, screen } from '@testing-library/react';

import Calc from './Calc';

describe('Calc', () => {
  test('renders Calc component', () => {
    render(<Calc />);

    screen.getByText(8);
    expect(screen.getByText(/8/).toBeInTheDocument);
  });
});
