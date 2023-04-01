import { Box, Skeleton, Stack } from "@mui/material";
import { AdCardImageLayout } from "../AdCard/AdCardImageLayout";
import { AdCardLayout, AddCardLayoutProps } from "../AdCard/AdCardLayout";
import { grey } from "~/ui-kit";

export interface AdCardSkeletonProps extends AddCardLayoutProps {}

export function AdCardSkeleton({
  orientation = "vertical",
  ...props
}: AdCardSkeletonProps) {
  return (
    <AdCardLayout
      {...props}
      orientation={orientation}
      sx={{
        cursor: "inherit",

        filter: "none",

        "&:hover": {
          filter: "none",
        },
      }}
    >
      <AdCardImageLayout
        {...props}
        orientation={orientation}
        sx={theme => ({
          backgroundColor: theme.palette.background.default,
        })}
      >
        <Skeleton
          variant="rectangular"
          sx={theme => ({
            width: "100%",
            height: "100%",

            backgroundColor: grey[200],
          })}
        ></Skeleton>
        <Box
          sx={theme => ({
            position: "absolute",
            left: "50%",
            bottom: theme.spacing(1.5),

            width: theme.spacing(7),
            height: theme.spacing(1),

            backgroundColor: grey[100],

            borderRadius: theme.spacing(0.375),

            transform: "translate(-50%, 0)",
          })}
        />
      </AdCardImageLayout>
      <Stack
        direction="column"
        sx={theme => ({
          width: "100%",
          height: "100%",
          padding: theme.spacing(1.25, 1.5, 2.5),
          background: grey[100],
        })}
        gap={1.25}
      >
        <Stack direction="row" justifyContent="space-between" gap={1.25}>
          <Skeleton
            variant="rounded"
            sx={theme => ({
              width: "100%",
              height: theme.spacing(3.125),
              backgroundColor: grey[200],
              borderRadius: theme.spacing(1),
            })}
          />
          <Skeleton
            variant="rounded"
            sx={theme => ({
              width: theme.spacing(3.125),
              height: theme.spacing(3.125),
              flexShrink: 0,
              backgroundColor: grey[200],
              borderRadius: theme.spacing(1),
            })}
          />
        </Stack>
        <Skeleton
          variant="rounded"
          sx={theme => ({
            width: "100%",
            height: theme.spacing(2),
            backgroundColor: grey[200],
            borderRadius:
              orientation === "vertical"
                ? theme.spacing(0.75)
                : theme.spacing(1),
          })}
        />
        <Skeleton
          variant="rounded"
          sx={theme => ({
            width: orientation === "vertical" ? "100%" : "50%",
            height:
              orientation === "vertical"
                ? theme.spacing(1.75)
                : theme.spacing(2),
            backgroundColor: grey[200],
            borderRadius: theme.spacing(0.75),
          })}
        />
        {orientation === "horizontal" && (
          <Stack direction="row" alignItems="center" gap={1}>
            <Skeleton
              variant="rounded"
              sx={theme => ({
                width: "75%",
                height: theme.spacing(1.75),
                backgroundColor: grey[200],
                borderRadius: theme.spacing(0.75),
              })}
            />
            <Skeleton
              variant="rounded"
              sx={theme => ({
                width: "25%",
                height: theme.spacing(1.75),
                backgroundColor: grey[200],
                borderRadius: theme.spacing(0.75),
              })}
            />
          </Stack>
        )}
      </Stack>
    </AdCardLayout>
  );
}
