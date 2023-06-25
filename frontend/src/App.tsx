import { useReducer } from 'react';
import Display from './components/Display';
import { State } from './models/state';
import { Action } from './models/action';
import './App.scss';

const initialState: Readonly<State> = {
  currentOperand: '0',
  previousOperand: '',
  operation: '',
};

function reducer(state: State, action: Action): State {}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="main-container">
      <div className="mx-auto w-80">
        <Display />
        <div className="grid grid-cols-4 grid-rows-5 text-neutral-50">
          <button className="btn-accent">MS</button>
          <button className="btn-accent">MR</button>
          <button className="btn-accent">AC</button>
        </div>
      </div>
    </div>
  );
};

export default App;
