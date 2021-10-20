import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const useTitle = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(
      location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)
    );
  }, [location.pathname]);

  return { title };
};

export default useTitle;
