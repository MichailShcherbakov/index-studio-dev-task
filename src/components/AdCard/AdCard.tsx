import { Stack, Typography } from "@mui/material";
import { grey, white } from "~/ui-kit";
import { makePrettyPriceNumber } from "./helpers/makePrettyPriceNumber";
import { makePrettyDateTime } from "./helpers/makePrettyDateTime";
import { AdCardLayout, AddCardLayoutProps } from "./AdCardLayout";
import { AdCardImageLayout } from "./AdCardImageLayout";

export interface AdCardProps extends AddCardLayoutProps {
  title: string;
  price: number;
  city: string;
  date: string;
}

export function AdCard({ title, price, city, date, ...props }: AdCardProps) {
  return (
    <AdCardLayout {...props}>
      <AdCardImageLayout {...props}></AdCardImageLayout>
      <Stack
        direction="column"
        sx={theme => ({
          width: "100%",
          height: "100%",
          background: white,
          padding: theme.spacing(1.25, 1.5, 2.5),
        })}
        gap={1.25}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography component="p" variant="h5" noWrap>
            {makePrettyPriceNumber(price, "₽")}
          </Typography>
        </Stack>
        <Typography
          component="p"
          variant="h6"
          noWrap
          sx={{
            height: "100%",
          }}
        >
          {title}
        </Typography>
        <Stack direction="row" justifyContent="space-between" gap={2}>
          <Typography component="span" variant="body2" noWrap>
            {city}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            sx={{
              flexShrink: 0,
            }}
          >
            {makePrettyDateTime(date)}
          </Typography>
        </Stack>
      </Stack>
    </AdCardLayout>
  );
}
