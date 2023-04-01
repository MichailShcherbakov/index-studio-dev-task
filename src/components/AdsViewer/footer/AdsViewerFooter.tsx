import { Stack } from "@mui/material";
import { useLoadMoreAds } from "~/store/ads/hooks";
import { UiButton, UiProgress } from "~/ui-kit";

export function AdsViewerFooter() {
  const { loadMore, isLoadableMore, isLoading, isError } = useLoadMoreAds();

  if (!isLoadableMore) return null;

  return (
    <Stack
      component="footer"
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      {isLoading && <UiProgress />}
      {!isLoading && <UiButton onClick={loadMore}>Показать еще</UiButton>}
    </Stack>
  );
}
