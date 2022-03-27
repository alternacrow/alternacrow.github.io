import '../src/assets/styles/global.scss';

import {du} from '../src/utils';
du.setupDayjs();

import App from 'next/app';

class MyApp extends App {
  render(): JSX.Element {
    const {Component, pageProps} = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
