import '../src/assets/styles/global.scss';

import {du} from '../src/utils';
du.setupDayjs();

import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
