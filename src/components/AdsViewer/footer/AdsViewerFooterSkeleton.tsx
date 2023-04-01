import { Skeleton, Stack } from "@mui/material";

export function AdsViewerFooterSkeleton() {
  return (
    <Stack
      component="footer"
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Skeleton
        variant="rounded"
        sx={theme => ({
          width: theme.spacing(15.625),
          height: theme.spacing(4),
          borderRadius: theme.spacing(5.5),
        })}
      />
    </Stack>
  );
}
