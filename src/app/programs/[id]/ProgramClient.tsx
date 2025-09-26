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

// Sectionコンポーネント（再利用用）
function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      variants={item}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
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
    <div className="max-w-3xl mx-auto px-4 py-8 text-black space-y-8">
      {/* メインタイトル */}
      <FadeInSection>
        <h1 className="mt-20 text-2xl font-bold">{program.title}</h1>
      </FadeInSection>

      {/* メイン画像 */}
      {program.image && (
        <FadeInSection>
          <img
            src={program.image.url}
            alt={program.title}
            width={program.image.width}
            height={program.image.height}
            className="mt-4 max-w-full h-auto rounded-md"
          />
        </FadeInSection>
      )}

      {/* title1 */}
      {program.title1 && (
        <FadeInSection>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title1}</h2>
          {program.image1 && (
            <img
              src={program.image1.url}
              alt={program.title1}
              width={program.image1.width}
              height={program.image1.height}
              className="mt-4 max-w-full h-auto rounded-md"
            />
          )}
          <p className="whitespace-pre-line">{program.detail1}</p>
          {linksMap.link1 && (
            <a
              href={linksMap.link1.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 transition mt-4"
            >
              {linksMap.link1.text}
            </a>
          )}
        </FadeInSection>
      )}

      {/* title2 */}
      {program.title2 && (
        <FadeInSection>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title2}</h2>
          {program.image2 && (
            <img
              src={program.image2.url}
              alt={program.title2}
              width={program.image2.width}
              height={program.image2.height}
              className="mt-4 max-w-full h-auto rounded-md"
            />
          )}
          <p className="whitespace-pre-line">{program.detail2}</p>
          {linksMap.link2 && (
            <a
              href={linksMap.link2.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 transition mt-4"
            >
              {linksMap.link2.text}
            </a>
          )}
        </FadeInSection>
      )}

      {/* title3 */}
      {program.title3 && (
        <FadeInSection>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title3}</h2>
          {program.image3 && (
            <img
              src={program.image3.url}
              alt={program.title3}
              width={program.image3.width}
              height={program.image3.height}
              className="mt-4 max-w-full h-auto rounded-md"
            />
          )}
          <p className="whitespace-pre-line">{program.detail3}</p>
          {linksMap.link3 && (
            <a
              href={linksMap.link3.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 transition mt-4"
            >
              {linksMap.link3.text}
            </a>
          )}
        </FadeInSection>
      )}

      {/* title4 */}
      {program.title4 && (
        <FadeInSection>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title4}</h2>
          {program.image4 && (
            <img
              src={program.image4.url}
              alt={program.title4}
              width={program.image4.width}
              height={program.image4.height}
              className="mt-4 max-w-full h-auto rounded-md"
            />
          )}
          <p className="whitespace-pre-line">{program.detail4}</p>
          {linksMap.link4 && (
            <a
              href={linksMap.link4.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 transition mt-4"
            >
              {linksMap.link4.text}
            </a>
          )}
        </FadeInSection>
      )}

      {/* title5 */}
      {program.title5 && (
        <FadeInSection>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title5}</h2>
          {program.image5 && (
            <img
              src={program.image5.url}
              alt={program.title5}
              width={program.image5.width}
              height={program.image5.height}
              className="mt-4 max-w-full h-auto rounded-md"
            />
          )}
          <p className="whitespace-pre-line">{program.detail5}</p>
          {linksMap.link5 && (
            <a
              href={linksMap.link5.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 transition mt-4"
            >
              {linksMap.link5.text}
            </a>
          )}
        </FadeInSection>
      )}

      {/* title6 */}
      {program.title6 && (
        <FadeInSection>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title6}</h2>
          {program.image6 && (
            <img
              src={program.image6.url}
              alt={program.title6}
              width={program.image6.width}
              height={program.image6.height}
              className="mt-4 max-w-full h-auto rounded-md"
            />
          )}
          <p className="whitespace-pre-line">{program.detail6}</p>
          {linksMap.link6 && (
            <a
              href={linksMap.link6.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 transition mt-4"
            >
              {linksMap.link6.text}
            </a>
          )}
        </FadeInSection>
      )}

      {/* title7 */}
      {program.title7 && (
        <FadeInSection>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title7}</h2>
          {program.image7 && (
            <img
              src={program.image7.url}
              alt={program.title7}
              width={program.image7.width}
              height={program.image7.height}
              className="mt-4 max-w-full h-auto rounded-md"
            />
          )}
          <p className="whitespace-pre-line">{program.detail7}</p>
          {linksMap.link7 && (
            <a
              href={linksMap.link7.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 transition mt-4"
            >
              {linksMap.link7.text}
            </a>
          )}
        </FadeInSection>
      )}

      {/* other セクション */}
      {program.other && (
        <FadeInSection>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: program.other }}
          />
        </FadeInSection>
      )}
    </div>
  );
}
