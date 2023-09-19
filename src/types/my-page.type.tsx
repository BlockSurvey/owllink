import { NextComponentType, NextPage, NextPageContext } from 'next';
import { AppProps } from 'next/app';

type MyPageProperties = {
  isProtected?: boolean;
};

export type MyPage = NextPage & MyPageProperties;

export type MyAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & MyPageProperties;
};
