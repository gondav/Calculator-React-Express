import { State } from '../models/state';

interface DisplayProps {
  state: Readonly<State>;
}

const Display = ({ state }: DisplayProps) => {
  return (
    <div className="display flex flex-col items-end justify-between  bg-neutral-700 border-b">
      <div className="previous-operand text-neutral-400">
        <p className="pt-2 px-4">
          {state.previousOperand} {state.operation}
        </p>
      </div>
      <div className="current-operand text-neutral-100 text-3xl">
        <p className="text-right px-4 pb-4 max-w-xs break-words">
          {state.currentOperand}
        </p>
      </div>
    </div>
  );
};

export default Display;
