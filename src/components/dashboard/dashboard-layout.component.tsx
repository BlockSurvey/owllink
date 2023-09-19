import BuilderComponent from "./builder.component";
import PreviewComponent from "./preview.component";

export default function DashboardLayoutComponent() {
  return (
    <>
      BuilderLayout
      <BuilderComponent />
      <PreviewComponent />
    </>
  );
}
