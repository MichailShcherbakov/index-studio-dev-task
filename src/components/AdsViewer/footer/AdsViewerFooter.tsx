import { Stack } from "@mui/material";
import { RequestErrorStub } from "~/components/stubs/RequestErrorStub";
import { useLoadMoreAds } from "~/store/ads/hooks";
import { UiButton, UiProgress } from "~/ui-kit";

export function AdsViewerFooter() {
  const { loadMore, isLoadableMore, isLoading, isError } = useLoadMoreAds();

  if (!isLoadableMore) return null;

  const showErrorStub = isError;
  const showLoadingProgress = !isError && isLoading;
  const showLoadMoreButton = !isError && !isLoading;

  return (
    <Stack
      component="footer"
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      {showErrorStub && <RequestErrorStub onRequestAgain={loadMore} />}
      {showLoadingProgress && <UiProgress />}
      {showLoadMoreButton && (
        <UiButton onClick={loadMore}>Показать еще</UiButton>
      )}
    </Stack>
  );
}
