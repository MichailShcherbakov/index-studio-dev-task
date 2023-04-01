import { Stack, Typography } from "@mui/material";
import { UiChip, grey, white } from "~/ui-kit";
import { makePrettyPriceNumber } from "./helpers/makePrettyPriceNumber";
import { makePrettyDateTime } from "./helpers/makePrettyDateTime";
import { AdCardLayout, AddCardLayoutProps } from "./AdCardLayout";
import { AdCardImageLayout } from "./AdCardImageLayout";
import { theme } from "~/ui-kit/theme";

export interface AdCardProps extends AddCardLayoutProps {
  title: string;
  price: number;
  address: string;
  createdAt: string;
  /**
   * @default false
   */
  isSeen?: boolean;
}

export function AdCard({
  title,
  price,
  address,
  createdAt,
  isSeen = false,
  ...props
}: AdCardProps) {
  return (
    <AdCardLayout {...props}>
      <AdCardImageLayout {...props}>
        {isSeen && (
          <UiChip
            sx={theme => ({
              position: "absolute",
              top: theme.spacing(1.5),
              left: "50%",

              transform: "translate(-50%, 0)",
            })}
          >
            Просмотрено
          </UiChip>
        )}
      </AdCardImageLayout>
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
          <Typography component="p" variant="h4" noWrap>
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
            {address}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            sx={{
              flexShrink: 0,
            }}
          >
            {makePrettyDateTime(createdAt)}
          </Typography>
        </Stack>
      </Stack>
    </AdCardLayout>
  );
}
