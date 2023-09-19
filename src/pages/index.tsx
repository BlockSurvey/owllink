import HeaderComponent from '@/components/home/header.component';
import { MyPage } from '@/types/my-page.type';

const Home: MyPage = () => {
  // Variables

  // States

  // Store

  // GraphQL

  return (
    <>
      <div className="w-full">
        <HeaderComponent />

        <header className="h-screen w-full flex justify-start text-center">
          <h1>Owl.Link</h1>
        </header>

        <section className="h-screen w-full flex justify-start text-center">
          Section 2
        </section>

        <section className="h-screen w-full flex justify-start text-center">
          Section 3
        </section>
      </div>
    </>
  );
};

export default Home;
Home.isProtected = false;
