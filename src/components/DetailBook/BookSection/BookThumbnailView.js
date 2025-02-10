import dayjs from "dayjs";

function BookThumbnailView(props) {
  const { urlImg, bookName, userAuthor, tagName, startNum, expireDate, book } =
    props;
  const { name, author, tag, avatar } = book;

  return (
    <div className="flex bg-[#9999990D] sm:rounded-2xl py-2 sm:py-6 sm:flex-row flex-col">
      <div className="sm:w-44 h-44 w-full rounded-2xl flex items-center justify-center overflow-hidden">
        {avatar && (
          <img src={avatar} alt="img" className="object-cover w-full h-full" />
        )}
      </div>
      <div className="flex flex-col mt-3 sm:mt-0 sm:ml-4 sm:justify-between gap-1 px-2">
        <div className="text-[#212121] font-bold text-2xl">{name}</div>
        <div className="text-[#262626] text-[16px]">{author}</div>
        <div className="flex items-center">
          <i className="fas fa-tag text-sm" />
          <span className="ml-2.5 text-[#262626]">{`Danh mục: ${tag}`}</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-clock text-sm text-red-600" />
          <span className="ml-2.5 text-[#262626]">{`Hạn: ${dayjs(
            expireDate
          ).format("DD/MM/YYYY")}`}</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-star text-sm text-[#f5da42]" />
          <span className="ml-2.5 text-[#262626]">{`Đánh giá: ${
            startNum ? startNum : "Chưa có đánh giá"
          }`}</span>
          {startNum && (
            <i className="ml-1 fas fa-star text-xs text-[#f5da42]" />
          )}
        </div>
      </div>
    </div>
  );
}

export default BookThumbnailView;
