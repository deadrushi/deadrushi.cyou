import { PageContent } from "@/components/PageContent";
import { PageWrapper } from "@/components/PageWrapper";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ACTIVITY_TRANSITION,} from "@/util/const";
import { LanyardData } from "@/util/lanyard";
import { Tooltip } from "@/components/Tooltip";

export default function Home() {
  const [activity, setActivity] = useState<LanyardData | null>(null);

  useEffect(() => {
    const update = () =>
      fetch(``)
        .then((r) => r.json())
        .then((data) => {
          if (data.success) setActivity(data.data);
        });

    const task = setInterval(update, 30 * 1000); // every 30 seconds

    update(); // initial

    return () => clearInterval(task);
  }, []);

  return (
    <PageWrapper>
      <PageContent>
        <div className="text-primary flex h-full flex-col gap-6 text-sm max-md:pb-14">
          <div className="post-box flex flex-col gap-2">
            <h3 className="leading-none font-bold">hobbies</h3>
            <div className="ml-3">
              <p>- interested in philosophy and psychology (as a hobby)</p>
              <p>- enjoy reading books and manga</p>
              <p>- love listening to music and watching movies</p>
              <p>- go for walks and sometimes do sports</p>
              <p>- into photography and researching internet culture</p>
              <p>- love skating, cycling, and visual novels</p>
              <p>- interested in fashion and design</p>
              <p>- i think that&apos;s all for now...</p>
            </div>
          </div>

          <div className="post-box flex flex-col gap-2">
            <h3 className="leading-none font-bold">socials</h3>

            <div className="text-primary relative ml-3 flex flex-col gap-1.5">
              <a
                href="https://github.com/deadrushi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#6699ff] hover:text-[#99ccff]"
              >
                github
              </a>
              <a
                href="https://x.com/gotiktaciri"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-[#99ccff]"
              >
                twitter
              </a>
              <a
                href="https://www.youtube.com/@deadrushi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-[#99ccff]"
              >
                youtube
              </a>
            </div>
          </div>

          <div className="post-box flex flex-col gap-2">
            <h3 className="leading-none font-bold">alternatives</h3>

            <div className="ml-3 flex flex-col gap-1.5">
              <a
                href={``}
                className="group flex cursor-pointer flex-col"
                target="_blank"
                rel="noreferrer noopener"
              >
                <p className="flex flex-row gap-1 font-medium transition-colors duration-100 group-hover:text-[#99ccff]">
                  <span>discord profile</span>
                </p>
                <p className="opacity-50">online presence & chat profile</p>
              </a>
            </div>
          </div>
        </div>
      </PageContent>

      {activity?.listening_to_spotify ? (
        <motion.div
          //initial={ACTIVITY_TRANSITION.initial}
          //animate={ACTIVITY_TRANSITION.animate}
          //exit={ACTIVITY_TRANSITION.exit}
          transition={{ duration: 1.5, ease: [0.26, 1, 0.6, 1] }}
          className="absolute right-10 bottom-10 mt-auto w-auto flex-col items-end justify-end max-sm:hidden"
        >
          <div className="flex flex-row items-center gap-2">
            <div className="relative size-1.5 overflow-visible">
              <span className="absolute size-[5px] rounded-full bg-green-600" />
              <span className="absolute size-[5px] animate-ping rounded-full bg-[color(display-p3_0.385_0.8_0.414_/_1)] [animation-duration:2s]" />
            </div>

            <div className="text-secondary mt-0.5 flex flex-row gap-1 text-end text-sm">
              Listening to{" "}
              <span className="relative w-min whitespace-nowrap">
                <Tooltip
                  className="absolute -top-18 left-1/2 !ml-0 -translate-x-1/2 overflow-visible border-none p-0"
                  content={
                    <div className="relative h-24 w-24 overflow-visible">
                      {/* eslint-disable @next/next/no-img-element */}
                      <img
                        src={activity.spotify.album_art_url}
                        width={96}
                        height={96}
                        alt={activity.spotify.album}
                        fetchPriority="high"
                        className="absolute rounded-md shadow-md select-none"
                        draggable={false}
                        rounded-md
                      />
                    </div>
                  }
                >
                  <a
                    href={``}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary cursor-alias rounded-[5px] font-medium"
                  >
                    {activity.spotify.song}
                  </a>
                </Tooltip>
              </span>{" "}
              by{" "}
              <span className="text-primary font-medium">
                {activity.spotify.artist}
              </span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </PageWrapper>
  );
}

// I miss nextjs 12

const LinkPreview = ({
  href,
  preview,
  children,
}: {
  href: string;
  preview: string;
  children: React.ReactNode;
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <div>
      <AnimatePresence>
        {showPreview ? (
          <motion.a
            initial={{ scale: 0.98, x: -4, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            exit={{
              scale: 0.98,

              x: -4,
              opacity: 0,
              transition: { delay: 0.015 },
            }}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            onMouseOver={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
            transition={{
              duration: 0.25,
              ease: [0.26, 1, 0.6, 1],
            }}
            className="group fixed left-54 z-10 max-w-64 min-w-64 overflow-clip rounded-[8px] border border-[#555555]/50 bg-[#333333] p-0.5 shadow-lg transition-colors duration-100 hover:bg-[#444444] max-sm:hidden"
            style={{
              marginTop: `calc(-${
                linkRef.current?.getBoundingClientRect().height ?? 0
              }px)`,
            }}
          >
            <Image
              src={preview}
              alt={`Screenshot of ${href}'s landing`}
              width={512}
              height={272}
              className="bg-tertiary overflow-clip rounded-[6px]"
            />

            <p className="text-tertiary w-full rounded-full px-1.5 pt-1 text-center text-xs font-medium transition-colors duration-100 group-hover:text-blue-700">
              {href.split("://")[1]}
            </p>
          </motion.a>
        ) : null}
      </AnimatePresence>

      <a
        ref={linkRef}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        onMouseOver={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        className="group relative flex w-full max-w-44 flex-col whitespace-nowrap"
      >
        {children}
      </a>
    </div>
  );
};
