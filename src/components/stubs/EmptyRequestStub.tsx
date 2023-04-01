import { Stack, Typography } from "@mui/material";

export function EmptyRequestStub() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" flex={1}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={1.25}
      >
        <Typography
          component="h6"
          variant="h5"
          color="primary"
          sx={{
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Объявлений не найдено
        </Typography>
        <Typography
          component="p"
          variant="body1"
          sx={theme => ({
            width: theme.spacing(30.75),
            textAlign: "center",
          })}
        >
          Простите, по вашему запросу товаров сейчас нет. Задайте запрос
          по-другому или измените характеристики
        </Typography>
      </Stack>
    </Stack>
  );
}