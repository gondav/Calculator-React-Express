import { Dispatch } from 'react';
import { Action } from '../models/action';
import { ActionType } from '../models/actionType';

interface DigitButtonProps {
  className: string;
  digit: string;
  dispatch: Dispatch<Action>;
}

const DigitButton = ({ className, digit, dispatch }: DigitButtonProps) => {
  return (
    <button
      className={className}
      onClick={() =>
        dispatch({
          type: ActionType.AddDigit,
          payload: { digit },
        })
      }
    >
      {digit}
    </button>
  );
};

export default DigitButton;
