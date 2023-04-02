import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Box, BoxProps } from "@mui/material";
import { green, grey } from "~/ui-kit";
import { Ad } from "~/store/ads/type";

export interface AdCardImageSliderProps extends BoxProps {
  images: Ad["images"];
}

export function AdCardImageSlider({
  images,
  ...props
}: AdCardImageSliderProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",

        "& > .swiper": {
          height: "100%",

          "& > .swiper-pagination": {
            "& > .swiper-pagination-bullet": {
              opacity: 1,

              backgroundColor: grey[400],

              "&.swiper-pagination-bullet-active": {
                backgroundColor: green[400],
              },
            },
          },
        },
      }}
    >
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        slidesPerView={1}
      >
        {images.map(image => (
          <SwiperSlide>
            <img
              src={image}
              alt="ad"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
