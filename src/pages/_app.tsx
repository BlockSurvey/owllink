import SessionAuthWrapper from '@/components/wrappers/session-auth.wrapper';
import '@/styles/globals.css';
import { MyAppProps } from '@/types/my-page.type';
import { NhostClient, NhostProvider } from '@nhost/nextjs';
import { NhostApolloProvider } from '@nhost/react-apollo';

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || ''
});

export default function App({ Component, pageProps }: MyAppProps) {
  return (
    // <Component {...pageProps} />
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        {/* Render custom layout */}
        {Component.isProtected ? (
          <SessionAuthWrapper>
            <Component {...pageProps} />
          </SessionAuthWrapper>
        ) : (
          <Component {...pageProps} />
        )}
      </NhostApolloProvider>
    </NhostProvider>
  );
}
