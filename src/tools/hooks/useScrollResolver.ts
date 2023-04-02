import React from "react";

export function useScrollResolver(
  targetFn: () => EventTarget | null,
  scrollChangeHandler: () => void,
) {
  React.useEffect(() => {
    const el = targetFn();

    el?.addEventListener("scroll", scrollChangeHandler, {
      passive: true,
    });

    return () => {
      el?.removeEventListener("scroll", scrollChangeHandler);
    };
  }, [targetFn, scrollChangeHandler]);
}
