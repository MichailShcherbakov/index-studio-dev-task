import { UiChip, UiChipProps } from "~/ui-kit";

export interface AdSeenChipProps extends UiChipProps {}

export function AdSeenChip(props: AdSeenChipProps) {
  return (
    <UiChip
      {...props}
      sx={theme => ({
        position: "absolute",
        top: theme.spacing(1.5),
        left: "50%",
        zIndex: theme.zIndex.tooltip,
        transform: "translate(-50%, 0)",
      })}
    >
      Просмотрено
    </UiChip>
  );
}
