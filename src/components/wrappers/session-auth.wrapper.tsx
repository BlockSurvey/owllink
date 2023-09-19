import { useAuthenticationStatus } from '@nhost/nextjs';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactElement;
}

export default function SessionAuthWrapper({ children }: Props) {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuthenticationStatus();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!isAuthenticated) {
    router.push('/');
    return null;
  }

  return (
    <>
      {/* Fetch org details */}
      {/* <FetchProfileComponent> */}
      {/* Render child screen */}
      {children}
      {/* </FetchProfileComponent> */}
    </>
  );
}
