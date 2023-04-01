import { AdCardOrientation } from "~/components/AdCard/AdCardLayout";
import { AdsViewEnum } from "~/store/ads/type";

export const ORIENTATION_BY_VIEW: Record<AdsViewEnum, AdCardOrientation> = {
  [AdsViewEnum.GRID]: "vertical",
  [AdsViewEnum.LIST]: "horizontal",
};

export const CELLS_SIZE_BY_VIEW: Record<AdsViewEnum, number> = {
  [AdsViewEnum.GRID]: 3,
  [AdsViewEnum.LIST]: 6,
};
