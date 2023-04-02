import axios from "axios";
import { API_URL } from "./constants";
import { Ad } from "~/store/ads/type";

export type GetAdsResult = {
  items: Ad[];
  total: number;
  page: number;
  size: number;
  pages: number;
};

export type GetAdsOptions = {
  page: number;
};

export const AdsApi = {
  getAds: async (options: GetAdsOptions) => {
    const { page } = options;

    const { data } = await axios.get<GetAdsResult>(
      `${API_URL}/items?page=${page}`,
    );

    return {
      ...data,
      items: data.items.map(item => ({
        ...item,
        images: new Array(4)
          .fill(0)
          .map((_, idx) => [
            `https://picsum.photos/seed/${item.id}-${idx}/224/260`,
          ]),
      })),
    };
  },
};
