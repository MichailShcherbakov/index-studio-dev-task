import { grey } from "@mui/material/colors";
import { AdCardImageSliderLayout } from "./AdCardImageSliderLayout";
import { AdCardLayout, AdCardLayoutProps } from "./AdCardLayout";
import { UiSkeleton, UiStack } from "~/ui-kit";

export interface AdCardSkeletonProps extends AdCardLayoutProps {}

export function AdCardSkeleton(props: AdCardSkeletonProps) {
  return (
    <AdCardLayout {...props}>
      <AdCardImageSliderLayout>
        <UiSkeleton
          variant="rounded"
          width={256}
          height={288}
          sx={{
            backgroundColor: grey[200],
          }}
        />
      </AdCardImageSliderLayout>
      <UiStack direction="column" width="100%" gap={2}>
        <UiStack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <UiSkeleton
            variant="rounded"
            width="20%"
            height={17}
            sx={{
              backgroundColor: grey[200],
            }}
          />
          <UiSkeleton
            variant="rounded"
            width={32}
            height={32}
            sx={{
              backgroundColor: grey[200],
            }}
          />
        </UiStack>
        <UiSkeleton
          variant="rounded"
          width="40%"
          height={25}
          sx={{
            backgroundColor: grey[200],
          }}
        />
        <UiSkeleton
          variant="rounded"
          width="30%"
          height={19}
          sx={{
            backgroundColor: grey[200],
          }}
        />
        <UiSkeleton
          variant="rounded"
          width="100%"
          height={68}
          sx={{
            backgroundColor: grey[200],
          }}
        />
        <UiSkeleton
          variant="rounded"
          width="25%"
          height={17}
          sx={{
            backgroundColor: grey[200],
          }}
        />
      </UiStack>
    </AdCardLayout>
  );
}
