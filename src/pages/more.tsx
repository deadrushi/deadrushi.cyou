import { PageContent } from "@/components/PageContent";
import { PageWrapper } from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <PageContent threadLabel="thread #002">
        <div className="flex h-full flex-col gap-6 text-sm">
          <div className="post-box flex flex-col gap-2">
            <h3 className="leading-none font-bold">me</h3>
            <div className="ml-3">
              <p>- i am 18 years old</p>
              <p>- english and literature student in prep year</p>
              <p>- follows internet culture closely</p>
              <p>- into software for 6 years</p>
              <p>- used to be a music producer</p>
              <p>- been working with Lua-u for 3 years</p>
              <p>- i think thats it</p>
            </div>
          </div>

          {/* TODO: this isn't really possible with apple music unless i scrobble on last fm */}
          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold leading-none">
              what i&apos;ve been listening to
            </h3>
            <div className="ml-3">
              <p>- songs here</p>
            </div>
          </div> */}
        </div>
      </PageContent>
    </PageWrapper>
  );
}
