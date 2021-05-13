import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocaltionChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocaltionChange);

    return () => {
      window.removeEventListener("popstate", onLocaltionChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
