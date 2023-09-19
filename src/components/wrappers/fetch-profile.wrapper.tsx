import { GET_PROFILE_BY_ID_QUERY } from '@/gql/profile.gql';
import { Profiles } from '@/types/profile.type';
import { useQuery } from '@apollo/client';
import { useUserId } from '@nhost/nextjs';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function FetchProfileComponent({ children }: Props) {
  // Variables
  const userId = useUserId();

  // GraphQL
  const { loading, error, data } = useQuery<Profiles>(GET_PROFILE_BY_ID_QUERY, {
    variables: {
      userId
    }
  });

  useEffect(() => {
    if (data) {
      // TODO: Store in global store
      console.log(data);
    }
  }, [data]);

  if (loading) {
    return <>Loading...</>;
  }

  return <>{children}</>;
}
