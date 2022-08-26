import Screen from './components/Screen';
import Wrapper from './components/wrapper';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProvider from './logic/CalcContext';

const btnValues = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
