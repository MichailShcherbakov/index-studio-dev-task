import { UiSkeleton, UiStack, UiStackProps } from "~/ui-kit";

export interface AdsViewerFooterSkeletonProps extends UiStackProps {}

export function AdsViewerFooterSkeleton(props: AdsViewerFooterSkeletonProps) {
  return (
    <UiStack
      {...props}
      component="footer"
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <UiSkeleton
        variant="rounded"
        sx={theme => ({
          width: theme.spacing(15.625),
          height: theme.spacing(4),
          borderRadius: theme.spacing(5.5),
        })}
      />
    </UiStack>
  );
}
