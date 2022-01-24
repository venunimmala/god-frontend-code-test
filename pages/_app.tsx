import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";
// import App from 'next/app'
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <React.StrictMode>
          <Component {...pageProps} />
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
}

export default MyApp;