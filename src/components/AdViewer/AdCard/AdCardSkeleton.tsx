import { grey } from "@mui/material/colors";
import { AdCardImageSliderLayout } from "./AdCardImageSliderLayout";
import { AdCardLayout, AdCardLayoutProps } from "./AdCardLayout";
import { Skeleton, Stack } from "@mui/material";

export interface AdCardProps extends AdCardLayoutProps {}

export function AdCardSkeleton(props: AdCardProps) {
  return (
    <AdCardLayout {...props}>
      <AdCardImageSliderLayout>
        <Skeleton
          variant="rounded"
          width={256}
          height={288}
          sx={{
            backgroundColor: grey[200],
          }}
        />
      </AdCardImageSliderLayout>
      <Stack direction="column" width="100%" gap={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <Skeleton
            variant="rounded"
            width="20%"
            height={17}
            sx={{
              backgroundColor: grey[200],
            }}
          />
          <Skeleton
            variant="rounded"
            width={32}
            height={32}
            sx={{
              backgroundColor: grey[200],
            }}
          />
        </Stack>
        <Skeleton
          variant="rounded"
          width="40%"
          height={25}
          sx={{
            backgroundColor: grey[200],
          }}
        />
        <Skeleton
          variant="rounded"
          width="30%"
          height={19}
          sx={{
            backgroundColor: grey[200],
          }}
        />
        <Skeleton
          variant="rounded"
          width="100%"
          height={68}
          sx={{
            backgroundColor: grey[200],
          }}
        />
        <Skeleton
          variant="rounded"
          width="25%"
          height={17}
          sx={{
            backgroundColor: grey[200],
          }}
        />
      </Stack>
    </AdCardLayout>
  );
}
