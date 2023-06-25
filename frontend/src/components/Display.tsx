const Display = () => {
  return (
    <div className="display flex flex-col items-end justify-between  bg-neutral-700 border-b">
      <div className="previous-operand text-neutral-400">
        <p className="pt-2 px-4">66 +</p>
      </div>
      <div className="current-operand text-neutral-100 text-3xl">
        <p className="text-right px-4 pb-4 max-w-xs break-words">12</p>
      </div>
    </div>
  );
};

export default Display;
