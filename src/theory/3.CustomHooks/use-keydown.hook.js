import React from "react";

export default function useKeydown(key, callback) {

  React.useEffect(() => {
    const downHandler = (e) => (e.keyCode === key) && callback(e);
    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, 
  [key]
  );

 // ??
}
