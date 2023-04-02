import { UiStack, UiStackProps, UiTypography } from "~/ui-kit";

export interface AdNotFoundStubProps extends UiStackProps {}

export function AdNotFoundStub(props: AdNotFoundStubProps) {
  return (
    <UiStack
      {...props}
      direction="row"
      alignItems="center"
      justifyContent="center"
      flex={1}
    >
      <UiStack
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={1.25}
      >
        <UiTypography
          component="h6"
          variant="h5"
          color="primary"
          sx={{
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Объявление не найдено
        </UiTypography>
        <UiTypography
          component="p"
          variant="body1"
          sx={theme => ({
            width: theme.spacing(30.75),
            textAlign: "center",
          })}
        >
          Простите, по вашему запросу товар не найдет. Задайте запрос по-другому
          или измените характеристики
        </UiTypography>
      </UiStack>
    </UiStack>
  );
}
