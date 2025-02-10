import React from "react";
import useSuggestTion from "./useSuggestion";
import { useRouter } from "next/navigation";

const SearchSugestion = () => {
  const { listKeys } = useSuggestTion();
  const router = useRouter()
  return (
    <div class="max-w-4xl mx-auto bg-white p-6 rounded-md">
      <h1 class="text-[#2E7D32] text-xl font-medium mb-8">
        Bạn đang tìm kiếm gì?
      </h1>

      <div className="flex flex-wrap gap-3">
        {listKeys.map((key, index) => (
          <div
            key={key.id}
            class="bg-[#F8F9FA] rounded-lg p-2 cursor-pointer hover:shadow-md"
            onClick={() => window.open(key.url)}
          >
            <span class="text-[#2E7D32] truncate">{key.term}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSugestion;
