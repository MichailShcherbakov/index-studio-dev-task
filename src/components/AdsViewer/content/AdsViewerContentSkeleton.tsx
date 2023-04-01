import {
  AdsViewerContentLayout,
  AdsViewerContentLayoutProps,
} from "./AdsViewerContentLayout";
import { Grid } from "@mui/material";
import { AdCardSkeleton } from "~/components/AdCardSkeleton";

const SKELETONS = new Array(20).fill(0).map((_, idx) => (
  <Grid item key={idx}>
    <AdCardSkeleton />
  </Grid>
));

export interface AdsViewerContentSkeletonProps
  extends AdsViewerContentLayoutProps {}

export function AdsViewerContentSkeleton(props: AdsViewerContentSkeletonProps) {
  return (
    <AdsViewerContentLayout {...props}>{SKELETONS}</AdsViewerContentLayout>
  );
}
