import { useAppSelector } from "~/store/hooks";
import { RequestStatusEnum } from "../type";

export function useAds() {
  const ads = useAppSelector(state => state.ads.all);

  const isLoading = useAppSelector(
    state =>
      state.ads.status === RequestStatusEnum.PENDING && !state.ads.all.length,
  );

  const isError = useAppSelector(
    state =>
      state.ads.status === RequestStatusEnum.REJECTED && !state.ads.all.length,
  );

  return { ads, isLoading, isError };
}
