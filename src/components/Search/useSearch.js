import { useState, useRef, useEffect } from "react";
import Services from "@/services";

export const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState(null);
  const wrapperRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);

  let cleanTimeout;

  const handleSearch = async (textSearch) => {
    try {
      setHasSearched(true);
      setLoading(true);

      const {
        data: { data },
      } = await Services.bookService.search(textSearch);

      setType(data.type);

      const resolveData = Array.isArray(data.data)
        ? data.data
        : typeof data.data === "object" &&
          data !== null &&
          Object.keys(data.data).length > 0
        ? [data.data]
        : [];
      setListSearch(resolveData);
    } catch (error) {
      console.error(error);
      setListSearch([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (value) => {
    setInputValue(value);
    setLoading(true);
    const trimmedValue = value.trim();

    clearTimeout(cleanTimeout);

    if (!trimmedValue) {
      setListSearch([]);
      setHasSearched(false);
      setLoading(false);
      return;
    }

    cleanTimeout = setTimeout(() => {
      handleSearch(trimmedValue);
    }, 1000);
  };

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setInputValue("");
    }
  };

  const focusInput = () => {
    setTimeout(() => {
      if (wrapperRef.current) {
        const input = wrapperRef.current.querySelector("input");
        if (input) {
          input.focus();
        }
      }
    }, 10);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    wrapperRef,
    loading,
    listSearch,
    hasSearched,
    inputValue,
    type,
    handleInputChange,
    setListSearch,
    setHasSearched,
    setInputValue,
    setShowSearch,
    showSearch,
    focusInput,
  };
};
