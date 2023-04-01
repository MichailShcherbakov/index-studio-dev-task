import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { theme } from "./ui-kit/theme";
import { UiButton, UiProgress, UiIconButton, UiChip } from "./ui-kit";

import { ReactComponent as LikeIcon } from "~/assets/icons/like.svg";
import { ReactComponent as GridIcon } from "~/assets/icons/grid.svg";
import { ReactComponent as ListIcon } from "~/assets/icons/list.svg";

import { UpwardButton } from "./components/UpwardButton";
import { AdCard } from "./components/AdCard";
import { AdCardSkeleton } from "./components/AdCardSkeleton";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack>
        <UiButton>Показать еще</UiButton>
        <UiButton>Повторить попытку</UiButton>
        <UiIconButton>
          <LikeIcon />
        </UiIconButton>
        <UiIconButton isActive>
          <GridIcon />
        </UiIconButton>
        <UiIconButton>
          <ListIcon />
        </UiIconButton>
        <UiProgress />
        <UiChip>Просмотрено</UiChip>
        <UpwardButton />
        <Stack p={4} gap={4}>
          <AdCard
            title="Название товарной позиции"
            price={12463}
            city="Город"
            date={new Date().toISOString()}
          />
          <AdCard
            title="Название товарной позицииdasdasdasdasdasdas dasdasdasd"
            price={1246343324324}
            city="Городaskdhajdid3 j23f 23hf iuh2 fh32iuf32f23jr"
            date={new Date().toISOString()}
          />
          <AdCard
            orientation="horizontal"
            title="Название товарной позицииdasdasdasdasdasdas dasdasdasd"
            price={1246343324324}
            city="Городaskdhajdid3 j23f 23hf iuh2 fh32iuf32f23jr"
            date={new Date().toISOString()}
          />
          <AdCardSkeleton />
          <AdCardSkeleton orientation="horizontal" />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
