import React from 'react';
import '~/styles/globals.css'
import 'react-placeholder/lib/reactPlaceholder.css';
import { Layout } from '~/components/ui';
import type { AppProps } from 'next/app';
import moment from 'moment';
import 'moment/locale/fr'

moment.locale('fr');

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
