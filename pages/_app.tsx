import '../styles/_main.scss';
import type { AppProps } from 'next/app';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ReactElement } from 'react'

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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp