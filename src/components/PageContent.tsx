import { PAGE_TRANSITION } from "@/util/const";
import { cn } from "@/util/utils";
import { HTMLMotionProps, motion } from "motion/react";
import { forwardRef } from "react";

type PageContentProps = HTMLMotionProps<"div"> & {
  threadLabel?: string;
  pageTitle?: string;
};

export const PageContent = forwardRef<HTMLDivElement, PageContentProps>(
  function PageContent(
    { children, threadLabel = "thread #001", pageTitle = "deadrushi.cyou", ...props },
    ref,
  ) {

    return (
      <motion.div
        className={cn(
          "board-shell mx-auto flex h-full w-full max-w-[980px] flex-col gap-6 rounded-none border-[#444444] bg-[#2a2a2a] p-8 text-[#cccccc] overflow-hidden",
          props.className,
        )}
      >
        <div className="board-post flex-1 overflow-y-auto">
          <div className="board-post-header">
            <span>deadrushi</span>
            <span>{threadLabel}</span>
          </div>

          <motion.h1
            layoutId="header"
            layout="position"
            className="board-title xs:mt-4 mt-0 mb-2 text-2xl font-semibold"
          >
            {pageTitle}
          </motion.h1>

          <motion.div
            ref={ref}
            initial={PAGE_TRANSITION.initial}
            animate={PAGE_TRANSITION.animate}
            exit={PAGE_TRANSITION.exit}
            transition={PAGE_TRANSITION.transition}
            {...props}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    );
  },
);