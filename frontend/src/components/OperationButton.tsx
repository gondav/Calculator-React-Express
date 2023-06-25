import { Dispatch } from 'react';
import { Action } from '../models/action';
import { ActionType } from '../models/actionType';

interface OperationButtonProps {
  className: string;
  operation: string;
  dispatch: Dispatch<Action>;
}

const OperationButton = ({
  className,
  operation,
  dispatch,
}: OperationButtonProps) => {
  return (
    <button
      className={className}
      onClick={() =>
        dispatch({
          type: ActionType.ChooseOperation,
          payload: { operation },
        })
      }
    >
      {operation}
    </button>
  );
};

export default OperationButton;
