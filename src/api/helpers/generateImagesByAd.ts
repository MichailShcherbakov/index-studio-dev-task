import { Ad, AdImage } from "~/store/ads/type";

const FIXED_IMAGE_NUM = 4;
const FIXED_IMAGE_WIDTH = 224;
const FIXED_IMAGE_HEIGHT = 260;

export function generateImagesByAd(ad: Ad): AdImage[] {
  return new Array(FIXED_IMAGE_NUM).fill(0).map((_, idx) => ({
    id: `${ad.id}-${idx}`,
    url: `https://picsum.photos/seed/${ad.id}-${idx}/${FIXED_IMAGE_WIDTH}/${FIXED_IMAGE_HEIGHT}`,
  }));
}
