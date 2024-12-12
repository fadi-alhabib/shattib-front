import { useConfirmDelete } from "../hooks/useConfirmDeleteModal";
import { useApi } from "..";

const ConfirmDeleteModal = () => {
  const {
    isShownConfirmDeleteModal,
    setIsShownConfirmDeleteModal,
    id,
    endpoint,
  } = useConfirmDelete();
  const { deleteData, isLoading } = useApi(endpoint, "DELETE");

  if (isShownConfirmDeleteModal) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  const handleDelete = async () => {
    if (id !== null) {
      await deleteData(id);
      setIsShownConfirmDeleteModal(false);
    }
  };

  return isShownConfirmDeleteModal ? (
    <div className="fixed z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
      <div className="w-1/3 h-1/3 bg-white rounded-xl flex flex-col items-center justify-center gap-6 text-center max-lg:w-1/2">
        <h1 className="text-2xl">هل أنت متأكد من حذف هذا المنتج؟</h1>
        <div className="flex gap-4">
          <button
            className="rounded bg-red-600 text-white w-32 py-1 px-3"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? <span>جاري الحذف...</span> : <span>حذف</span>}
          </button>
          <button
            className="rounded bg-gray-200 w-20 py-1 px-3"
            onClick={() => setIsShownConfirmDeleteModal(false)}
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ConfirmDeleteModal;
