import { AppProps } from 'next/app'; // Next.jsの型
import '../styles/globals.css'; // Tailwind CSSやその他のグローバルCSSファイルをインポート

// カスタムAppコンポーネント
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // コンポーネントとページごとのプロパティを渡す
    <Component {...pageProps} />
  );
}

export default MyApp;