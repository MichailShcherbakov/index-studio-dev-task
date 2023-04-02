import { UiGrid, UiGridProps } from "~/ui-kit";

export interface AdsViewerContentLayoutProps extends UiGridProps {}

export function AdsViewerContentLayout(props: AdsViewerContentLayoutProps) {
  return <UiGrid {...props} component="section" container spacing={3} />;
}
