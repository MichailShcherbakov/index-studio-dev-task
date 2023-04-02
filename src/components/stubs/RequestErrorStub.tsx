import { UiButton, UiTypography, UiStack, UiStackProps } from "~/ui-kit";

export interface RequestErrorStubProps extends UiStackProps {
  onRequestAgain?: () => void;
}

export function RequestErrorStub({
  onRequestAgain,
  ...props
}: RequestErrorStubProps) {
  return (
    <UiStack
      {...props}
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={1.25}
    >
      <UiTypography component="span" variant="body1" noWrap>
        Ошибка при загрузке
      </UiTypography>
      <UiButton onClick={onRequestAgain}>Повторить попытку</UiButton>
    </UiStack>
  );
}
