import { BlogWrapper } from "@/components/blog/BlogWrapper";
import { BlogContent } from "@/components/blog/BlogContent";

export default function AboutMe() {
  return (
    <BlogWrapper>
      <BlogContent>
        <div>
          <header className="font-bold text-2xl mt-8">
            about me
          </header>
          <p className="text-secondary text-base">04/18/26</p>
        </div>
        <p>
          i&apos;m a <span className="text-[#6699ff] font-medium">self-taught</span>, <span className="text-[#6699ff] font-medium">frontend-focused</span> software engineer with a knack for making things look nice. fascinated by magic rocks.
        </p>
        <h3 className="font-medium text-lg mt-4">links</h3>
        <p>
          you can find me on{" "}
          <a
            href="https://github.com/cnrad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6699ff] hover:text-[#99ccff]"
          >
            github
          </a>
          ,{" "}
          <a
            href="https://x.com/notcnrad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6699ff] hover:text-[#99ccff]"
          >
            twitter
          </a>
          , and{" "}
          <a
            href="https://linkedin.com/in/cnrad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6699ff] hover:text-[#99ccff]"
          >
            linkedin
          </a>
          . feel free to{" "}
          <a
            href="mailto:hello@cnrad.dev"
            className="text-[#6699ff] hover:text-[#99ccff]"
          >
            message
          </a>{" "}
          me as well.
        </p>
      </BlogContent>
    </BlogWrapper>
  );
}
