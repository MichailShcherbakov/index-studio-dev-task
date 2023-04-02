import { Skeleton, SkeletonProps, styled } from "@mui/material";
import { grey } from "../colors";

export type UiSkeletonProps<TComponent extends React.ElementType<any>> =
  SkeletonProps<TComponent>;

export const UiSkeleton = styled(Skeleton)(() => ({
  backgroundColor: grey[200],
}));
