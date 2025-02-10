import { useForm } from "react-hook-form";

const ModalActiveBook = ({ isOpen, onClose, onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-80 xs:w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-800"
        >
          X
        </button>
        <h2 className="text-2xl text-green-600 font-semibold mb-4">
          Kích hoạt sách
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="bookCode"
              className="block text-sm font-medium text-gray-700"
            >
              Mã sách
            </label>
            <input
              id="bookId"
              {...register("bookId", { required: "Mã sách là bắt buộc" })}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.bookCode && (
              <p className="text-sm text-red-500">{errors.bookCode.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="activationCode"
              className="block text-sm font-medium text-gray-700"
            >
              Mã kích hoạt
            </label>
            <input
              id="codedId"
              {...register("codedId", {
                required: "Mã kích hoạt là bắt buộc",
              })}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.activationCode && (
              <p className="text-sm text-red-500">
                {errors.activationCode.message}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 text-white rounded-lg ${
                isSubmitting
                  ? "bg-green-500"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isSubmitting ? "Đang gửi..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalActiveBook;
