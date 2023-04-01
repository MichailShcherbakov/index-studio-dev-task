import { Stack, StackProps, Typography } from "@mui/material";
import { UiButton } from "~/ui-kit";

export interface RequestErrorStubProps extends StackProps {
  onRequestAgain?: () => void;
}

export function RequestErrorStub({
  onRequestAgain,
  ...props
}: RequestErrorStubProps) {
  return (
    <Stack
      {...props}
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={1.25}
    >
      <Typography component="span" variant="body1" noWrap>
        Ошибка при загрузке
      </Typography>
      <UiButton onClick={onRequestAgain}>Повторить попытку</UiButton>
    </Stack>
  );
}
