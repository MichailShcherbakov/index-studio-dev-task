import { Grid, GridProps } from "@mui/material";

export interface AdsViewerContentLayoutProps extends GridProps {}

export function AdsViewerContentLayout(props: AdsViewerContentLayoutProps) {
  return <Grid {...props} container spacing={3} />;
}
