import { Typography, TypographyProps } from "@mui/material";

export type UiTypographyProps<TComponent extends React.ElementType<any>> =
  TypographyProps<TComponent>;

export const UiTypography = Typography;
