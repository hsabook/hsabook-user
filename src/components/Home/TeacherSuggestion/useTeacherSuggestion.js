import Services from "@/services";
import { useState, useEffect } from "react";

const useTeacherSuggestion = () => {
  const [teacherSuggestions, setTeacherSuggestions] = useState([]);

  function getItemsPerPage() {
    const width = window.innerWidth;
    if (width >= 1024) return 5;
    if (width >= 768) return 4;
    if (width >= 640) return 3;
    return 2;
  }

  useEffect(() => {
    Services.blockService
      .getConfigData("teacher")
      .then((response) => {
        setTeacherSuggestions(response.data.data);
      })
      .catch((err) => {
        console.warn(err);
        setTeacherSuggestions([]);
      });
  }, []);
  return { teacherSuggestions, getItemsPerPage };
};

export default useTeacherSuggestion;
