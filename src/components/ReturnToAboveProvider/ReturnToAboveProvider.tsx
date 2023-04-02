import { Stack, StackProps } from "@mui/material";
import React from "react";
import { useScrollResolver } from "~/tools/hooks/useScrollResolver";
import { UpwardButton } from "../UpwardButton";

const RETURN_TO_ABOVE_EDGE = 100;

export type ReturnToAboveProviderProps<
  TComponent extends React.ElementType<any> = "div",
> = StackProps<TComponent>;

export function ReturnToAboveProvider<
  TComponent extends React.ElementType<any>,
>({ children, ...props }: ReturnToAboveProviderProps<TComponent>) {
  const [visible, setVisible] = React.useState(false);

  const ref = React.useRef<HTMLDivElement | null>(null);

  useScrollResolver(
    () => ref.current,
    () => {
      setVisible(ref.current!.scrollTop >= RETURN_TO_ABOVE_EDGE);
    },
  );

  function scrollToTop() {
    ref.current!.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {visible && <UpwardButton onClick={scrollToTop} />}
      <Stack ref={ref} overflow="auto" height="100vh" {...props}>
        {children}
      </Stack>
    </>
  );
}
