import { useAuthenticationStatus } from '@nhost/nextjs';
import { useRouter } from 'next/router';
import FetchProfileComponent from './fetch-profile.wrapper';

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
    router.push('/login');
    return null;
  }

  return (
    <>
      <FetchProfileComponent>
        {/* Render child screen */}
        {children}
      </FetchProfileComponent>
    </>
  );
}
