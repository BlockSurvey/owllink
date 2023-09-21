import SessionAuthWrapper from '@/components/wrappers/session-auth.wrapper';
import { useThemeStore } from '@/stores/theme.store';
import { themeDarkVars } from '@/styles/antDesignThemeDark.const';
import { themeLightVars } from '@/styles/antDesignThemeLight.const';
import '@/styles/globals.css';
import { MyAppProps } from '@/types/my-page.type';
import { NhostClient, NhostProvider } from '@nhost/nextjs';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { ConfigProvider, theme } from 'antd';
import enUS from 'antd/locale/en_US';

export const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
  region: process.env.NEXT_PUBLIC_NHOST_REGION
});

export default function App({ Component, pageProps }: MyAppProps) {
  const { darkAlgorithm, defaultAlgorithm } = theme;
  const currentTheme = useThemeStore(state => state.currentTheme);

  return (
    // <Component {...pageProps} />
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <ConfigProvider
          locale={enUS}
          theme={
            currentTheme === 'dark'
              ? {
                  algorithm: darkAlgorithm,
                  ...themeDarkVars
                }
              : {
                  algorithm: defaultAlgorithm,
                  ...themeLightVars
                }
          }
        >
          {/* Render custom layout */}
          {Component.isProtected ? (
            <SessionAuthWrapper>
              <Component {...pageProps} />
            </SessionAuthWrapper>
          ) : (
            <Component {...pageProps} />
          )}
        </ConfigProvider>
      </NhostApolloProvider>
    </NhostProvider>
  );
}
