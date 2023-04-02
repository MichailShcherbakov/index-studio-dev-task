import axios from "axios";
import { API_URL } from "./constants";
import { Ad } from "~/store/ads/type";
import { generateImagesByAd } from "./helpers/generateImagesByAd";

export type GetAdsOptions = {
  page: number;
};

export type GetAdsResult = {
  items: Ad[];
  total: number;
  page: number;
  size: number;
  pages: number;
};

export type GetAdOptions = {
  id: Ad["id"];
};

export type GetAdResult = Ad;

export const AdsApi = {
  getAds: async (options: GetAdsOptions) => {
    const { page } = options;

    const { data } = await axios.get<GetAdsResult>(
      `${API_URL}/items?page=${page}`,
      {
        withCredentials: false,
      },
    );

    return {
      ...data,
      items: data.items.map(item => ({
        ...item,
        images: generateImagesByAd(item),
      })),
    };
  },
  getAd: async (options: GetAdOptions) => {
    const { id } = options;

    const { data: item } = await axios.get<GetAdResult>(
      `${API_URL}/items/${id}`,
      {
        withCredentials: false,
      },
    );

    return {
      ...item,
      images: generateImagesByAd(item),
    };
  },
};
