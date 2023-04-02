import { Skeleton } from "@mui/material";
import {
  AdsViewerHeaderLayout,
  AdsViewerHeaderLayoutProps,
} from "./AdsViewerHeaderLayout";
import { grey } from "@mui/material/colors";

export interface AdsViewerHeaderSkeletonProps
  extends AdsViewerHeaderLayoutProps {}

export function AdsViewerHeaderSkeleton(props: AdsViewerHeaderSkeletonProps) {
  return (
    <AdsViewerHeaderLayout {...props}>
      <Skeleton
        variant="rounded"
        sx={theme => ({
          width: theme.spacing(10.5),
          height: theme.spacing(4.875),
          margin: theme.spacing(0.5625),
          backgroundColor: grey[200],
          borderRadius: theme.spacing(1),
        })}
      />
    </AdsViewerHeaderLayout>
  );
}
