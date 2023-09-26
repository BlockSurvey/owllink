import BuilderComponent from './builder.component';
import PreviewComponent from './preview.component';

export default function DashboardLayoutComponent() {
  return (
    <div className="h-full block lg:flex lg:flex-row">
      <BuilderComponent />
      <PreviewComponent />
    </div>
  );
}
