import '@/styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { Root } from '@/containers/root';
import { LAYOUT_TYPE } from '@/layouts/declare';

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  layout: LAYOUT_TYPE;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Root layout={Component.layout}>
      <Component {...pageProps} />
    </Root>
  );
}
