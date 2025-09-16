// src/app/program/[id]/page.tsx
import { notFound } from "next/navigation";
import { ProgramsItem } from "@/lib/programs";

async function fetchProgram(id: string): Promise<ProgramsItem | null> {
  const res = await fetch(
    `https://armaer-football.microcms.io/api/v1/programs/${id}`,
    {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY ?? "" },
      cache: "no-store",
    }
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const program = await fetchProgram(id);
  if (!program) notFound();

  // リンク抽出関数
  function extractLink(html?: string) {
    if (!html) return null;
    const regex = /<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i;
    const match = html.match(regex);
    if (!match) return null;
    return { url: match[1], text: match[2] };
  }

  // link1〜7からリンク抽出
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
      <h1 className="mt-20 text-2xl font-bold">{program.title}</h1>

      {program.image && (
        <img
          src={program.image.url}
          alt={program.title}
          width={program.image.width}
          height={program.image.height}
          className="mt-4 max-w-full h-auto rounded-md"
        />
      )}

      {/* title1 */}
      {program.title1 && (
        <section>
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
        </section>
      )}

      {/* title2 */}
      {program.title2 && (
        <section>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title2}</h2>
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
        </section>
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

      {/* title3 */}
      {program.title3 && (
        <section>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title3}</h2>
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
        </section>
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

      {/* title4 */}
      {program.title4 && (
        <section>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title4}</h2>
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
        </section>
      )}
      {program.image4 && (
        <img
          src={program.image4.url}
          alt={program.title4}
          width={program.image4.width}
          height={program.image4.height}
          className="mt-4 max-w-full h-auto rounded-md"
        />
      )}

      {/* title5 */}
      {program.title5 && (
        <section>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title5}</h2>
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
        </section>
      )}
      {program.image5 && (
        <img
          src={program.image5.url}
          alt={program.title5}
          width={program.image5.width}
          height={program.image5.height}
          className="mt-4 max-w-full h-auto rounded-md"
        />
      )}

      {/* title6 */}
      {program.title6 && (
        <section>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title6}</h2>
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
        </section>
      )}

      {/* title7 */}
      {program.title7 && (
        <section>
          <h2 className="mt-15 text-xl font-semibold mb-2">{program.title7}</h2>
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
        </section>
      )}

      {/* other */}
      {program.other && (
        <section
          className="mt-20 prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: program.other.replace(
              /<a /g,
              '<a class="inline-block bg-[rgb(241,84,84)] text-white px-6 py-3 rounded-lg hover:brightness-90 transition mt-11 " '
            ),
          }}
        />
      )}
    </div>
  );
}
