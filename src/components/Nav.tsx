import { cn } from "@/util/utils";
import Link from "next/link";
import { useRouter } from "next/router";

const PAGES = {
  home: "/",
  me: "/more",
} as const;

export const Nav = () => {
  const { pathname } = useRouter();

  return (
    <div
      key="nav"
      className="fixed top-6 left-6 z-[100] hidden flex-row flex-wrap items-center gap-2 text-[13px] uppercase tracking-[0.24em] text-[#cccccc] sm:flex"
    >
      {Object.entries(PAGES).map(([name, href], index) => (
        <>
          {index > 0 ? <span className="text-[#666666]">|</span> : null}
          <Link
            href={href}
            key={name}
            className={cn(
              "rounded-sm border border-[#555555] bg-[#333333] px-2 py-1 transition-colors duration-100 hover:bg-[#444444] hover:text-[#ffffff]",
              {
                "bg-[#555555] font-bold text-primary":
                  href === "/" ? pathname === href : pathname.startsWith(href),
                "text-secondary": !(
                  href === "/" ? pathname === href : pathname.startsWith(href)
                ),
              },
            )}
          >
            {name}
          </Link>
        </>
      ))}
    </div>
  );
};
