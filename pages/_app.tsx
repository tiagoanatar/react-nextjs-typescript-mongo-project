import '../styles/_main.scss';
import type { AppProps } from 'next/app';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ReactElement } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import PageWithLayoutType from "../types/pageWithLayouts";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {

  const router = useRouter();
  const queryClient = new QueryClient();

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>)

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  )
}

export default MyApp