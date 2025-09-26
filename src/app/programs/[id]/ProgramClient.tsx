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

// セクションコンポーネント（再利用用）
function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      variants={item}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="my-12" // セクション間のスペース
    >
      {children}
    </motion.section>
  );
}

export default function ProgramClient({ program }: { program: ProgramsItem }) {
  // リンク抽出関数
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
    <div className="w-full min-h-screen px-4 py-8 text-black flex flex-col items-center">
      {/* メインタイトル */}
      <h1 className="text-4xl font-bold text-center mb-12">{program.title}</h1>

      {/* title1 */}
      {program.title1 && (
        <FadeInSection>
          <div className="relative w-full">
            {program.image1 && (
              <img
                src={program.image1.url}
                alt={program.title1}
                width={program.image1.width}
                height={program.image1.height}
                className="w-full h-auto rounded-md object-cover filter blur-sm"
              />
            )}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
              <h2 className="text-xl font-semibold text-white mb-2">{program.title1}</h2>
              <p className="text-white whitespace-pre-line">{program.detail1}</p>
              {linksMap.link1 && (
                <a
                  href={linksMap.link1.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 mt-4 transition"
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
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold mb-2">{program.title2}</h2>
            <p className="whitespace-pre-line">{program.detail2}</p>
            {linksMap.link2 && (
              <a
                href={linksMap.link2.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 mt-4 transition"
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
                className="mt-4 max-w-full h-auto rounded-md"
              />
            )}
          </div>
        </FadeInSection>
      )}

      {/* title3 */}
      {program.title3 && (
        <FadeInSection>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold mb-2">{program.title3}</h2>
            <p className="whitespace-pre-line">{program.detail3}</p>
            {linksMap.link3 && (
              <a
                href={linksMap.link3.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 mt-4 transition"
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
                className="mt-4 max-w-full h-auto rounded-md"
              />
            )}
          </div>
        </FadeInSection>
      )}

      {/* title4 */}
      {program.title4 && (
        <FadeInSection>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold mb-2">{program.title4}</h2>
            {program.image4 && (
              <img
                src={program.image4.url}
                alt={program.title4}
                width={program.image4.width}
                height={program.image4.height}
                className="mt-4 max-w-full h-auto rounded-md"
              />
            )}
            <p className="whitespace-pre-line mt-4">{program.detail4}</p>
            {linksMap.link4 && (
              <a
                href={linksMap.link4.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 mt-4 transition"
              >
                {linksMap.link4.text}
              </a>
            )}
          </div>
        </FadeInSection>
      )}

      {/* title5〜title7 カード化 */}
      {(program.title5 || program.title6 || program.title7) && (
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
            {[5,6,7].map((i) => {
              const title = program[`title${i}` as keyof ProgramsItem] as string | undefined;
              const detail = program[`detail${i}` as keyof ProgramsItem] as string | undefined;
              const image = program[`image${i}` as keyof ProgramsItem] as { url: string, width?: number, height?: number } | undefined;
              const link = linksMap[`link${i}` as keyof typeof linksMap];
              if (!title) return null;
              return (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                  {image && (
                    <img
                      src={image.url}
                      alt={title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )}
                  <div className="p-4 flex flex-col">
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm whitespace-pre-line">{detail}</p>
                    {link && (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 bg-[rgb(241,84,84)] text-white px-4 py-2 rounded hover:brightness-90 text-center"
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

      {/* other セクション */}
  {/* other セクション */}
{program.other && (
  <FadeInSection>
    <div className="flex flex-col items-center space-y-4 text-center max-w-4xl w-full px-4">
      {/* othertitle と otherdetail */}
      {program.othertitle && (
        <h2 className="text-2xl font-semibold">{program.othertitle}</h2>
      )}
      {program.otherdetail && (
        <p className="whitespace-pre-line">{program.otherdetail}</p>
      )}

      {/* 既存の other 内容 */}
      {(() => {
        const regex = /<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
        const matches = [...program.other.matchAll(regex)];
        if (matches.length === 0) {
          return (
            <div
              className="prose max-w-full"
              dangerouslySetInnerHTML={{ __html: program.other }}
            />
          );
        }
        return matches.map((match, idx) => (
          <a
            key={idx}
            href={match[1]}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 transition"
          >
            {match[2]}
          </a>
        ));
      })()}
    </div>
  </FadeInSection>
)}



    </div>
  );
}
