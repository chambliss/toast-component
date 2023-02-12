import React from 'react';

function useKeyDown(actionCallback, key) {
  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === key) {
        actionCallback()
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });
}

export default useKeyDown;