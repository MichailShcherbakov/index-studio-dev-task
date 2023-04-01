import { Stack, StackProps } from "@mui/material";

export interface AdsViewerHeaderLayoutProps extends StackProps {}

export function AdsViewerHeaderLayout(props: StackProps) {
  return (
    <Stack
      {...props}
      component="header"
      direction="row"
      alignItems="center"
      justifyContent="end"
    />
  );
}
