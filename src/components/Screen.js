import { useContext } from 'react';
import { CalcContext } from '../logic/CalcContext';

function Screen() {
  const { calc } = useContext(CalcContext);
  return (
    <div className="calculator" max={70} mode="doble">

      {calc.num ? calc.num : calc.res}
    </div>
  );
}

export default Screen;
