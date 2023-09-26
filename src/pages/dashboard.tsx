import DashboardLayoutComponent from '@/components/dashboard/dashboard-layout.component';
import { MyPage } from '@/types/my-page.type';

const Dashboard: MyPage = () => {

  // Variables

  // States

  // Store

  // GraphQL

  return (
    <>
      <div className="w-full h-full">
        <DashboardLayoutComponent />
        {/* <Button onClick={async () => await signOut()}>Sign out</Button> */}
      </div>
    </>
  );
};

export default Dashboard;
Dashboard.isProtected = true;
