const PaginationButtons = () => {
  return (
    <div className="flex gap-2 mt-8">
      <button>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white">
          1
        </div>
      </button>
      <button>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400 text-white">
          2
        </div>
      </button>
      <span className="select-none">...</span>
      <button>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400 text-white">
          9
        </div>
      </button>
    </div>
  );
};

export default PaginationButtons;
