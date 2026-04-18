import "./globals.css";

import localFont from "next/font/local";
import { Ysabeau, Karla } from "next/font/google";
import Head from "next/head";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ThemeProvider } from "next-themes";
import { Nav } from "@/components/Nav";
import { MobileNav } from "@/components/MobileNav";

const ysabeau = Ysabeau({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-ysabeau",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

const helveticaNeue = localFont({
  weight: "300",
  src: [
    {
      path: "../fonts/helvetica-neue/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-helvetica-neue",
});

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const click = new Audio("/osu.mp3");
    click.volume = 0.5;
    void click.play().catch(() => null);
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>deadrushi.cyou</title>
        <meta
          name="description"
          content="deadrushi.cyou — personal portfolio board and status page."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" href="/rei.png" />
        <link rel="prefetch" fetchPriority="high" href="/main/cside.webp" />
        <link rel="prefetch" fetchPriority="high" href="/main/dimension.webp" />
        <link rel="prefetch" fetchPriority="high" href="/main/incard.webp" />
        <link rel="prefetch" href="/art/figura_thumbnail.webp" />
        <link rel="prefetch" href="/art/spherus_thumbnail.webp" />
      </Head>
      <div
        className={`${helveticaNeue.variable} ${ysabeau.variable} ${karla.variable} @container/screen h-full w-full font-sans antialiased`}
      >
        <ThemeProvider>
            <div className="fixed inset-0 bg-[#1a1a1a]" />
            <div className="board-banner fixed inset-x-0 top-0 z-[90] border-b border-[#444444] bg-[#1a1a1a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#cccccc] shadow-[0_1px_0_rgba(0,0,0,0.3)]">
              deadrushi
            </div>
          <Nav />
          <MobileNav />

          <motion.main
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(4px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              ease: [0.26, 1, 0.6, 1],
            }}
            layout
            className="relative w-full h-screen overflow-hidden pt-12"
          >
            <AnimatePresence mode="popLayout">
              <Component {...pageProps} key={router.pathname} />
            </AnimatePresence>
          </motion.main>
        </ThemeProvider>
      </div>
    </>
  );
}
