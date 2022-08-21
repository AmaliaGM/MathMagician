import Wrapper from './components/wrapper';
import Calc from './components/calculator';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Calc />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
