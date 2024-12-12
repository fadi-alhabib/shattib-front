import { leftArrowCircleIcon, rightArrowCircleIcon } from "..";

const LeftRightButtonsCircle = () => {
  return (
    <div className="flex justify-end gap-2 p-8">
      <button>
        <img src={rightArrowCircleIcon} alt="" />
      </button>
      <button>
        <img src={leftArrowCircleIcon} alt="" />
      </button>
    </div>
  );
};

export default LeftRightButtonsCircle;
