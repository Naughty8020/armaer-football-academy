"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { ProgramsItem } from "@/lib/programs";

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      variants={item}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className=" flex flex-col items-center w-full"
    >
      <div className="w-full  mx-auto text-center">{children}</div>
    </motion.section>
  );
}

export default function ProgramClient({ program }: { program: ProgramsItem }) {
  function extractLink(html?: string) {
    if (!html) return null;
    const regex = /<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i;
    const match = html.match(regex);
    if (!match) return null;
    return { url: match[1], text: match[2] };
  }

  const linksMap = {
    link1: extractLink(program.link1),
    link2: extractLink(program.link2),
    link3: extractLink(program.link3),
    link4: extractLink(program.link4),
    link5: extractLink(program.link5),
    link6: extractLink(program.link6),
    link7: extractLink(program.link7),
  };

  return (
    <div className="w-full min-h-screen  text-black flex flex-col items-center">
      {/* メインタイトル */}
      

      {/* title1 → 画像だけフル幅 */}
      {program.title1 && (
        <FadeInSection>
          <div className="relative w-full">
            {program.image1 && (
              <img
                src={program.image1.url}
                alt={program.title1}
                width={program.image1.width}
                height={program.image1.height}
                className="w-full h-auto object-cover filter blur-[2px]" // フル幅
              />
            )}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-lg sm:text-4xl font-semibold text-white mb-2 break-words">
                {program.title1}
              </h2>
              <p className="text-sm sm:text-lg text-white whitespace-pre-line">
                {program.detail1}
              </p>
              {linksMap.link1 && (
                <a
                  href={linksMap.link1.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block self-center bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 mt-4 transition"
                >
                  {linksMap.link1.text}
                </a>
              )}
            </div>
          </div>
        </FadeInSection>
      )}
{/* title2 */}
{program.title2 && (
  <FadeInSection>
    <h2 className="text-2xl sm:text-5xl font-semibold mb-4 break-words max-w-4xl mx-auto">
      {program.title2}
    </h2>
    <p className="whitespace-pre-line max-w-4xl mx-auto">
      {program.detail2}
    </p>
    {linksMap.link2 && (
      <a
        href={linksMap.link2.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block self-center bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 mt-4 transition"
      >
        {linksMap.link2.text}
      </a>
    )}
    {program.image2 && (
      <img
        src={program.image2.url}
        alt={program.title2}
        width={program.image2.width}
        height={program.image2.height}
        className="mt-4 max-w-4xl w-full h-auto rounded-md mx-auto"
      />
    )}
  </FadeInSection>
)}


      {/* title3 */}
      {program.title3 && (
        <FadeInSection>
          <h2 className="text-2xl sm:text-5xl font-semibold mb-9 break-words">
            {program.title3}
          </h2>
          <p className="whitespace-pre-line">{program.detail3}</p>
          {linksMap.link3 && (
            <a
              href={linksMap.link3.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block self-center bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 mt-4 transition"
            >
              {linksMap.link3.text}
            </a>
          )}
          {program.image3 && (
            <img
              src={program.image3.url}
              alt={program.title3}
              width={program.image3.width}
              height={program.image3.height}
              className="mt-4 max-w-4xl w-full h-auto rounded-md mx-auto"
            />
          )}
        </FadeInSection>
      )}

      {/* title4 */}
      {program.title4 && (
        <FadeInSection>
          <h2 className="text-2xl sm:text-5xl font-semibold mb-4 break-words">
            {program.title4}
          </h2>
          <p className="whitespace-pre-line mt-7">{program.detail4}</p>
          {linksMap.link4 && (
            <a
              href={linksMap.link4.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block self-center bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 mt-6 transition"
            >
              {linksMap.link4.text}
            </a>
          )}
          {program.image4 && (
            <img
              src={program.image4.url}
              alt={program.title4}
              width={program.image4.width}
              height={program.image4.height}
              className="mt-4 max-w-4xl w-full h-auto rounded-md mx-auto"
            />
          )}
        </FadeInSection>
      )}

      {/* list (title5〜7) */}
      {(program.title5 || program.title6 || program.title7) && (
        <FadeInSection>
          {program.listtitle && (
            <h2 className="text-2xl sm:text-5xl font-bold mb-8 break-words">
              {program.listtitle}
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[5, 6, 7].map((i) => {
              const title = program[`title${i}` as keyof ProgramsItem] as string | undefined;
              const detail = program[`detail${i}` as keyof ProgramsItem] as string | undefined;
              const image = program[`image${i}` as keyof ProgramsItem] as { url: string; width?: number; height?: number } | undefined;
              const link = linksMap[`link${i}` as keyof typeof linksMap];
              if (!title) return null;
              return (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col text-center h-[420px]"
                >
                  {image && (
                    <img
                      src={image.url}
                      alt={title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )}
                  <div className="p-4 flex flex-col flex-1 relative">
                    <h3 className="text-lg md:text-2xl font-semibold mb-2 break-words">
                      {title}
                    </h3>
                    <div className="text-sm whitespace-pre-line overflow-y-auto max-h-[120px] px-1 relative">
                      {detail}
                      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white/80 via-white/20 to-transparent pointer-events-none"></div>
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400 animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {link && (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 self-center bg-[rgb(241,84,84)] text-white px-4 py-2 rounded hover:brightness-90 text-center"
                      >
                        {link.text}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeInSection>
      )}

      {/* other */}
      {program.other && (
        <FadeInSection>
          {program.othertitle && (
            <h2 className="text-3xl sm:text-5xl font-semibold mb-4 break-words">
              {program.othertitle}
            </h2>
          )}
          {program.otherdetail && (
            <p className="whitespace-pre-line mb-6">{program.otherdetail}</p>
          )}
          {(() => {
            const regex = /<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
            const matches = [...program.other.matchAll(regex)];

            if (matches.length === 0) {
              return (
                <div
                  className="prose max-w-4xl mx-auto text-center"
                  dangerouslySetInnerHTML={{ __html: program.other }}
                />
              );
            }

            return (
              <div className="flex flex-col items-center gap-4 mt-6 max-w-4xl mx-auto">
                {matches.map((match, idx) => (
                  <a
                    key={idx}
                    href={match[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 transition"
                  >
                    {match[2]}
                  </a>
                ))}
              </div>
            );
          })()}
        </FadeInSection>
      )}
    </div>
  );
}
