import '@/styles/globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  preload: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${poppins.className} h-screen`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
