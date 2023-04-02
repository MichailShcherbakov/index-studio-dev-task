import { Stack, StackProps } from "@mui/material";

export type UiStackProps<TComponent extends React.ElementType<any> = "div"> =
  StackProps<TComponent>;

export const UiStack = Stack;
