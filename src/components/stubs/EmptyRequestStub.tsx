import { UiStack, UiTypography, UiStackProps } from "~/ui-kit";

export interface EmptyRequestStubProps extends UiStackProps {}

export function EmptyRequestStub(props: EmptyRequestStubProps) {
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
          Объявлений не найдено
        </UiTypography>
        <UiTypography
          component="p"
          variant="body1"
          sx={theme => ({
            width: theme.spacing(30.75),
            textAlign: "center",
          })}
        >
          Простите, по вашему запросу товаров сейчас нет. Задайте запрос
          по-другому или измените характеристики
        </UiTypography>
      </UiStack>
    </UiStack>
  );
}
