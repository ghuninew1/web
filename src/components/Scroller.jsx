import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Scroller({children}) {

  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listenToScroll = () => {
    const heightToHideFrom =10;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div>
      <b>
        height: {height} - {isVisible ? "show" : "hide"}
      </b>
      {isVisible && <>{children}</>}
    </div>
  );
}
