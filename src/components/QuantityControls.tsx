import { minusCircleIcon, plusCircleIcon, useState } from "..";

interface Props {
  quantity?: number;
  onChange: (newQuantity: number) => void; // Callback to update the quantity in the parent
}

const QuantityControls = ({ quantity = 1, onChange }: Props) => {
  const [count, setCount] = useState(quantity);

  const increase = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount); // Notify parent about the quantity change
  };

  const decrease = () => {
    if (count > 1) {
      // Prevent decreasing below 1
      const newCount = count - 1;
      setCount(newCount);
      onChange(newCount); // Notify parent about the quantity change
    }
  };

  return (
    <div className="rounded-full flex items-center justify-center w-full bg-gray-200 gap-4 py-1 px-3">
      <button onClick={increase}>
        <img src={plusCircleIcon} alt="Increase" />
      </button>
      <span className="flex justify-center w-4">{count}</span>
      <button onClick={decrease}>
        <img src={minusCircleIcon} alt="Decrease" />
      </button>
    </div>
  );
};

export default QuantityControls;
