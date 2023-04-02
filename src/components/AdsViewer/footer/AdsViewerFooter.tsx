import { RequestErrorStub } from "~/components/stubs/RequestErrorStub";
import { useLoadMoreAds } from "~/store/ads/hooks";
import { UiButton, UiProgress, UiStack, UiStackProps } from "~/ui-kit";

export interface AdsViewerFooterProps extends UiStackProps {}

export function AdsViewerFooter(props: AdsViewerFooterProps) {
  const { loadMore, isLoadableMore, isLoading, isError } = useLoadMoreAds();

  if (!isLoadableMore) return null;

  const showErrorStub = isError;
  const showLoadingProgress = !isError && isLoading;
  const showLoadMoreButton = !isError && !isLoading;

  return (
    <UiStack
      {...props}
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
    </UiStack>
  );
}
