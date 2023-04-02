import { AdCardOrientation } from "~/components/AdCard/AdCardLayout";
import { AdsViewEnum } from "~/store/ads/type";

export const ORIENTATION_BY_VIEW: Record<AdsViewEnum, AdCardOrientation> = {
  [AdsViewEnum.GRID]: "vertical",
  [AdsViewEnum.LIST]: "horizontal",
};

export const CELLS_SIZE_BY_VIEW: Record<
  AdsViewEnum,
  {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  }
> = {
  [AdsViewEnum.GRID]: {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  },
  [AdsViewEnum.LIST]: {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6,
  },
};
