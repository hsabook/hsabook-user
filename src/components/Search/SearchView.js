import React from "react";
import SearchResultView from "./SearchResult/SearchResultView";

function SearchView({
  wrapperRef,
  loading,
  listSearch,
  hasSearched,
  inputValue,
  type,
  handleInputChange,
  setShowSearch = () => {},
  setInputValue,
}) {
  return (
    <div ref={wrapperRef} className="relative w-full max-w-md">
      <input
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onBlur={() => {
          if (listSearch.length > 0) {
            setTimeout(() => {
              setShowSearch(false);
            }, 0);
            return;
          }
          setShowSearch(false);
        }}
        placeholder="Tìm kiếm sách, chương, đề..."
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {inputValue && (
        <div
          className="absolute text-lg right-2 top-2 cursor-pointer text-gray-400"
          onClick={() => {
            setInputValue("");
          }}
        >
          <i class="fa-solid fa-xmark"></i>
        </div>
      )}
      {inputValue && (
        <div className="absolute top-full w-full p-4 z-50 rounded-lg bg-white shadow-xl">
          {loading && (
            <div className="flex items-center justify-center h-12">
              <span className="text-gray-400">Đang tải...</span>
            </div>
          )}
          {!loading && !hasSearched && (
            <div className="flex items-center justify-center h-12">
              <p className="text-center text-gray-400">Nhập để tìm kiếm...</p>
            </div>
          )}
          {!loading && hasSearched && listSearch.length === 0 && (
            <div className="flex items-center justify-center h-12">
              <p className="text-center text-gray-400">
                Không có kết quả tìm kiếm nào
              </p>
            </div>
          )}
          {!loading && hasSearched && listSearch.length > 0 && (
            <>
              <span className="block mb-2 text-sm text-gray-500">
                {`${listSearch.length} kết quả`}
              </span>
              <div className="overflow-y-auto max-h-80">
                {listSearch.map((item) => (
                  <SearchResultView
                    key={item.id}
                    type={type}
                    item={item}
                    closeSearch={() => {}}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchView;
