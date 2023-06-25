import { useReducer } from 'react';
import Display from './components/Display';
import './App.scss';
import { ActionType } from './models/actionType';
import OperationButton from './components/OperationButton';
import DigitButton from './components/DigitButton';
import { initialState, reducer } from './services/calculatorService';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="main-container">
      <div className="mx-auto w-80">
        <Display state={state} />
        <div className="grid grid-cols-4 grid-rows-5 text-neutral-50">
          <button className="btn-accent">MS</button>
          <button className="btn-accent">MR</button>
          <button className="btn-accent">AC</button>
          <OperationButton
            className="btn-primary"
            operation="/"
            dispatch={dispatch}
          ></OperationButton>
          <DigitButton
            className="btn-accent"
            digit="7"
            dispatch={dispatch}
          ></DigitButton>
          <DigitButton
            className="btn-accent"
            digit="8"
            dispatch={dispatch}
          ></DigitButton>
          <DigitButton
            className="btn-accent"
            digit="9"
            dispatch={dispatch}
          ></DigitButton>

          <OperationButton
            className="btn-primary"
            operation="x"
            dispatch={dispatch}
          ></OperationButton>
          <DigitButton
            className="btn-accent"
            digit="4"
            dispatch={dispatch}
          ></DigitButton>

          <DigitButton
            className="btn-accent"
            digit="5"
            dispatch={dispatch}
          ></DigitButton>
          <DigitButton
            className="btn-accent"
            digit="6"
            dispatch={dispatch}
          ></DigitButton>
          <OperationButton
            className="btn-primary"
            operation="-"
            dispatch={dispatch}
          ></OperationButton>
          <DigitButton
            className="btn-accent"
            digit="1"
            dispatch={dispatch}
          ></DigitButton>
          <DigitButton
            className="btn-accent"
            digit="2"
            dispatch={dispatch}
          ></DigitButton>
          <DigitButton
            className="btn-accent"
            digit="3"
            dispatch={dispatch}
          ></DigitButton>
          <OperationButton
            className="btn-primary"
            operation="+"
            dispatch={dispatch}
          ></OperationButton>
          <DigitButton
            className="btn-accent col-span-2"
            digit="0"
            dispatch={dispatch}
          ></DigitButton>
          <DigitButton
            className="btn-accent"
            digit="."
            dispatch={dispatch}
          ></DigitButton>
          <button
            className="btn-primary"
            onClick={() =>
              dispatch({
                type: ActionType.Evaluate,
              })
            }
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
