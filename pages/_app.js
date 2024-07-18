import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import React from "react";
import App from "next/app";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  preload: true,
});
import { AuthProvider } from "./context/auth_context";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <AuthProvider>
        <div className={`${poppins.className} h-screen`}>
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </React.StrictMode>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
