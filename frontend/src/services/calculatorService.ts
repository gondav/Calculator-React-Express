import { Action } from '../models/action';
import { ActionType } from '../models/actionType';
import { State } from '../models/state';

export const initialState: Readonly<State> = {
  currentOperand: '0',
  previousOperand: '',
  operation: '',
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.AddDigit:
      if (action.payload?.digit === '0' && state.currentOperand == '0') {
        return state;
      }

      if (action.payload?.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }

      if (state.currentOperand === '0' && !isNaN(+action.payload!.digit!)) {
        return {
          ...state,
          currentOperand: `${action.payload?.digit}`,
        };
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${action.payload?.digit}`,
      };

    case ActionType.ChooseOperation:
      if (state.currentOperand === '') {
        return {
          ...state,
          operation: action.payload?.operation || '',
        };
      }

      if (state.previousOperand === '') {
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: action.payload?.operation || '',
          currentOperand: '',
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload?.operation || '',
        currentOperand: '',
      };

    case ActionType.Clear:
      return initialState;

    case ActionType.Evaluate:
      if (
        state.currentOperand === '' ||
        state.previousOperand === '' ||
        state.operation === ''
      ) {
        return state;
      }

      return {
        ...state,
        currentOperand: evaluate(state),
        previousOperand: '',
        operation: '',
      };

    case ActionType.ReadMemory:
      return {
        ...state,
        currentOperand: action.payload?.digit || '',
      };

    default:
      return state;
  }
}

function evaluate({
  currentOperand,
  previousOperand,
  operation,
}: State): string {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(curr)) {
    return '';
  }
  let computation = 0;

  switch (operation) {
    case '+':
      computation = prev + curr;
      break;
    case 'x':
      computation = prev * curr;
      break;
    case '/':
      computation = prev / curr;
      break;
    case '-':
      computation = prev - curr;
      break;
  }

  return computation.toString();
}
