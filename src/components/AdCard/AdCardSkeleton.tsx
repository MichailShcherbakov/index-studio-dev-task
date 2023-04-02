import { AdCardImageLayout } from "./AdCardImageLayout";
import { AdCardLayout, AddCardLayoutProps } from "./AdCardLayout";
import { UiBox, grey, UiSkeleton, UiStack } from "~/ui-kit";

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

        boxShadow: "none",

        "&:hover": {
          boxShadow: "none",
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
        <UiSkeleton variant="rectangular" width="100%" height="100%" />
        <UiBox
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
      <UiStack
        direction="column"
        sx={theme => ({
          width: "100%",
          height: "100%",
          padding: theme.spacing(1.25, 1.5, 2.5),
          background: grey[100],
        })}
        gap={1.25}
      >
        <UiStack direction="row" justifyContent="space-between" gap={1.25}>
          <UiSkeleton
            variant="rounded"
            sx={theme => ({
              width: "100%",
              height: theme.spacing(3.125),

              borderRadius: theme.spacing(1),
            })}
          />
          <UiSkeleton
            variant="rounded"
            sx={theme => ({
              width: theme.spacing(3.125),
              height: theme.spacing(3.125),
              flexShrink: 0,

              borderRadius: theme.spacing(1),
            })}
          />
        </UiStack>
        <UiSkeleton
          variant="rounded"
          sx={theme => ({
            width: "100%",
            height: theme.spacing(2),

            borderRadius:
              orientation === "vertical"
                ? theme.spacing(0.75)
                : theme.spacing(1),
          })}
        />
        <UiSkeleton
          variant="rounded"
          sx={theme => ({
            width: orientation === "vertical" ? "100%" : "50%",
            height:
              orientation === "vertical"
                ? theme.spacing(1.75)
                : theme.spacing(2),

            borderRadius: theme.spacing(0.75),
          })}
        />
        {orientation === "horizontal" && (
          <UiStack direction="row" alignItems="center" gap={1}>
            <UiSkeleton
              variant="rounded"
              sx={theme => ({
                width: "75%",
                height: theme.spacing(1.75),

                borderRadius: theme.spacing(0.75),
              })}
            />
            <UiSkeleton
              variant="rounded"
              sx={theme => ({
                width: "25%",
                height: theme.spacing(1.75),

                borderRadius: theme.spacing(0.75),
              })}
            />
          </UiStack>
        )}
      </UiStack>
    </AdCardLayout>
  );
}
