import { useState, useEffect } from "react";

export const useDetectOutsideClick = (element, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {

      // If the active element exists and is clicked outside of
      if (element.current !== null && !element.current.contains(e.target)) {
        setIsActive(!isActive);
      }
      if (element.current !== null && e.target instanceof HTMLAnchorElement) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive, element]);

  return [isActive, setIsActive];
};
