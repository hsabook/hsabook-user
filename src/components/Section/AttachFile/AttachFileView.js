import React from "react";

const AttachFileView = ({ item }) => {
  return (
    <div
      key={item.uid}
      className="flex flex-col w-72 p-2.5 pr-6 rounded-[8px] border border-solid border-gray-300"
    >
      <div className="flex justify-between ">
        <div className="w-full flex-1 flex items-start">
          <div className="w-6">
            <i
              className={`fas fa-${item.type === "file" ? "link" : "image"}`}
            />
          </div>
          <div className="min-w-[196px] mx-3">
            <p className="font-bold text-sm truncate">{item.name}</p>
            <p className="text-[#989692]">{Math.round(item.size / 1024)} KB</p>
            <a
              className="text-[#FFCC00]"
              href="#"
              onClick={() => window.open(item.url || "")}
            >
              Click to view
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttachFileView;
