import { type AppType } from "next/app";
import Head from "next/head";

import "~/styles/globals.css";
import "@fontsource-variable/inter";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

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
          <meta property="og:title" content="DeltaHacks 10" />
          <meta property="og:description" content="The hackathon for change." />
          <meta property="og:image" content="https://deltahacks.com/meta.png" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="deltahacks.com" />
          <meta property="twitter:url" content="https://deltahacks.com/" />
          <meta name="twitter:title" content="DeltaHacks 10" />
          <meta
            name="twitter:description"
            content="The hackathon for change."
          />
          <meta
            name="twitter:image"
            content="https://deltahacks.com/meta.png"
          />

          <meta name="theme-color" content="#F9D685" />
          <meta name="msapplication-navbutton-color" content="#F9D685" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#F9D685"
          />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <link rel="icon" type="image/xml+svg" href="/DH.svg" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </PostHogProvider>
    </>
  );
};

export default MyApp;
