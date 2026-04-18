import { cn } from "@/util/utils";
import { ComponentProps } from "react";
import { MotionProps, motion } from "motion/react";

export const PageWrapper = ({
  children,
  className,
  ...props
}: ComponentProps<"div"> & MotionProps) => {
  return (
    <motion.div
      className={cn(
        "relative w-full h-full min-h-full flex flex-col items-center justify-center overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
