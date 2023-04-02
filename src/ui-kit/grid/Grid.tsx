import { Grid, GridProps } from "@mui/material";

export type UiGridProps<TComponent extends React.ElementType<any> = "div"> =
  GridProps<TComponent>;

export const UiGrid = Grid;
