import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Head from "next/head";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/provider";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react"
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {


  return (
    <SessionProvider session={session}>
      <Toaster />
      <Head>
        <title>The Rebellious(temp name)</title>
        <meta name="description" content="Something something" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="light">

        <div >
          <Component {...pageProps} />
          <Analytics />
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};


export default api.withTRPC(MyApp);

