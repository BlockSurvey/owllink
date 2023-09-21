import HeaderComponent from '@/components/home/header.component';
import Signup from '@/components/home/signup';
import { MyPage } from '@/types/my-page.type';

const Home: MyPage = () => {
  // Variables

  // States

  // Store

  // GraphQL

  return (
    <>
      <div className="h-full">
        <HeaderComponent />

        <Signup />
      </div>
    </>
  );
};



export default Home;
Home.isProtected = false;
