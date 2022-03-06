import '../src/assets/styles/global.scss';

import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
