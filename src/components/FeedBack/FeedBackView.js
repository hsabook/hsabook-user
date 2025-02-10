import Image from "next/image";
import useFeedBack from "./useFeedBack";
import usePagination from "@/hooks/usePagination";

const FeedBackView = ({ title }) => {
  const {
    feedbacks = [
      { id: 1, image: null },
      { id: 2, image: null },
      { id: 3, image: null },
      { id: 4, image: null },
    ],
    getItemsPerPage,
  } = useFeedBack();

  // const { currentData, nextPage, prevPage, currentPage, totalPages } =
  //   usePagination(feedbacks, getItemsPerPage);

  if (!feedbacks) return null;

  return (
    <div className="mt-5 bg-white rounded-lg p-4 w-full overflow-hidden flex justify-center flex-col">
      <div className="flex justify-between my-3">
        <div className="text-green-600 text-xl font-semibold">{title}</div>
      </div>

      {/* Grid hiển thị feedback */}
      <div
        className="gap-5 w-full grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4"
      >
        {feedbacks?.map((feedback) => (
          <div
            key={feedback.id}
            className="rounded-md overflow-hidden shadow-sm bg-gray-50"
          >
            <div className="w-full aspect-square relative bg-slate-500 overflow-hidden">
              <Image
                layout="fill"
                alt="feedback img"
                src={feedback.image}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBackView;
