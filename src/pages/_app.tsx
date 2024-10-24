import { type AppType } from "next/app";
import Head from "next/head";

import "~/styles/globals.css";
import "@fontsource/gochi-hand";
import "@fontsource-variable/inter";

// Supports weights 100-900
import "@fontsource-variable/montserrat";

import { env } from "../env";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  // checks that we are client-side
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    person_profiles: "always", // or 'always' to create profiles for anonymous users as well
    ui_host: "https://app.posthog.com",
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
    },
  });
}

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <PostHogProvider client={posthog}>
        <Head>
          {/* HTML Meta Tags */}
          <title>DeltaHacks 11</title>
          <meta name="description" content="The hackathon for change." />

          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://deltahacks.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="DeltaHacks 11" />
          <meta property="og:description" content="The hackathon for change." />
          <meta
            property="og:image"
            content="https://deltahacks.com/meta_11.png"
          />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="deltahacks.com" />
          <meta property="twitter:url" content="https://deltahacks.com/" />
          <meta name="twitter:title" content="DeltaHacks 11" />
          <meta
            name="twitter:description"
            content="The hackathon for change."
          />
          <meta
            name="twitter:image"
            content="https://deltahacks.com/meta_11.png"
          />

          <meta name="theme-color" content="#5E3186" />
          <meta name="msapplication-navbutton-color" content="#5E3186" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#5E3186"
          />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <link rel="icon" type="image/xml+svg" href="/DH.svg" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <div className="fixed left-0 right-0 top-0 bg-red-500 py-8 text-center">
          LIVE BETA DEPLOYMENT
        </div>
        <Component {...pageProps} />
      </PostHogProvider>
    </>
  );
};

export default MyApp;
