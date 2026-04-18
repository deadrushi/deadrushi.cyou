import { PageContent } from "@/components/PageContent";
import { PageWrapper } from "@/components/PageWrapper";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LanyardData } from "@/util/lanyard";
import { Tooltip } from "@/components/Tooltip";

export default function Home() {
  const [activity, setActivity] = useState<LanyardData | null>(null);

  useEffect(() => {
    const update = () =>
      fetch("https://api.lanyard.rest/v1/users/YOUR_DISCORD_ID")
        .then((r) => r.json())
        .then((data) => {
          if (data.success) setActivity(data.data);
        })
        .catch(() => {});

    const task = setInterval(update, 30 * 1000);
    update();

    return () => clearInterval(task);
  }, []);

  return (
    <PageWrapper>
      <PageContent>
        <div className="text-primary flex h-full flex-col gap-6 text-sm max-md:pb-14">
          {/* hobbies */}
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

          {/* socials */}
          <div className="post-box flex flex-col gap-2">
            <h3 className="leading-none font-bold">socials</h3>

            <div className="ml-3 flex flex-col gap-1.5">
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

          {/* alternatives */}
          <div className="post-box flex flex-col gap-2">
            <h3 className="leading-none font-bold">alternatives</h3>

            <div className="ml-3 flex flex-col gap-1.5">
              <a
                href="#"
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

      {/* spotify activity */}
      {activity?.listening_to_spotify ? (
        <motion.div
          transition={{ duration: 1.5, ease: [0.26, 1, 0.6, 1] }}
          className="absolute right-10 bottom-10 mt-auto flex flex-col items-end justify-end max-sm:hidden"
        >
          <div className="flex flex-row items-center gap-2">
            <div className="relative size-1.5 overflow-visible">
              <span className="absolute size-[5px] rounded-full bg-green-600" />
              <span className="absolute size-[5px] animate-ping rounded-full bg-green-400 [animation-duration:2s]" />
            </div>

            <div className="text-secondary mt-0.5 flex flex-row gap-1 text-end text-sm">
              Listening to{" "}
              <span className="relative w-min whitespace-nowrap">
                <Tooltip
                  className="absolute -top-18 left-1/2 -translate-x-1/2 border-none p-0"
                  content={
                    <div className="relative h-24 w-24">
                      {/* eslint-disable @next/next/no-img-element */}
                      <img
                        src={activity.spotify.album_art_url}
                        width={96}
                        height={96}
                        alt={activity.spotify.album}
                        className="rounded-md shadow-md select-none"
                        draggable={false}
                      />
                    </div>
                  }
                >
                  <a
                    href={`https://open.spotify.com/search/${encodeURIComponent(
                      activity.spotify.song
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary cursor-pointer rounded-[5px] font-medium"
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