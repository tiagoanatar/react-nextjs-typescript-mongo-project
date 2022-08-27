import '../styles/_main.scss';
import type { AppProps } from 'next/app';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ReactElement } from 'react'

import store from '../store/store'
import { Provider } from 'react-redux'

import PageWithLayoutType from "../types/pageWithLayouts";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp