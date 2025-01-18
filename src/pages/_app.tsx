import { AppProps } from 'next/app';
import '../styles/globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="G-YXNQP4ZP1V" />
    </>
  );
}

export default MyApp;