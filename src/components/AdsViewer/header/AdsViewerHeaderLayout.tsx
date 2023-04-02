import { UiStack, UiStackProps } from "~/ui-kit";

export interface AdsViewerHeaderLayoutProps extends UiStackProps {}

export function AdsViewerHeaderLayout(props: AdsViewerHeaderLayoutProps) {
  return (
    <UiStack
      {...props}
      component="header"
      direction="row"
      alignItems="center"
      justifyContent="end"
    />
  );
}
