// src/app/program/[id]/page.tsx
import { notFound } from "next/navigation";
import { ProgramsItem } from "@/lib/programs";


async function fetchProgram(id: string): Promise<ProgramsItem | null> {
  try {
    const res = await fetch(
      `https://armaer-football.microcms.io/api/v1/programs/${id}`,
      {
        headers: {
          "X-API-KEY": process.env.MICROCMS_API_KEY ?? "",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error(`Failed to fetch program ${id}: ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data as ProgramsItem;
  } catch (error) {
    console.error("Error fetching program:", error);
    return null;
  }
}




export default async function ProgramPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ← await 必須！
  const program = await fetchProgram(id);
  if (!program) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-black space-y-8">
      <h1 className=" mt-20 text-2xl font-bold">{program.title}</h1>

      {program.title1 && (
        <section>
          <h2 className=" mt-15 text-xl font-semibold mb-2">{program.title1}</h2>
          <p className="whitespace-pre-line">{program.detail1}</p>
        </section>
      )}

      {program.title2 && (
        <section>
          <h2 className=" mt-15 text-xl font-semibold mb-2">{program.title2}</h2>
          <p className="whitespace-pre-line">{program.detail2}</p>
        </section>
      )}

      {program.title3 && (
        <section>
          <h2 className=" mt-15 text-xl font-semibold mb-2">{program.title3}</h2>
          <p className="whitespace-pre-line">{program.detail3}</p>
        </section>
      )}

      {program.title4 && (
        <section>
          <h2 className=" mt-15 text-xl font-semibold mb-2">{program.title4}</h2>
          <p className="whitespace-pre-line">{program.detail4}</p>
        </section>
      )}

      {program.title5 && (
        <section>
          <h2 className=" mt-15 text-xl font-semibold mb-2">{program.title5}</h2>
          <p className="whitespace-pre-line">{program.detail5}</p>
        </section>
      )}

      {program.title6 && (
        <section>
          <h2 className="mt-15 mt-3text-xl font-semibold mb-2">{program.title6}</h2>
          <p className="whitespace-pre-line">{program.detail6}</p>
        </section>
      )}

      {program.title7 && (
        <section>
          <h2 className=" mt-15 text-xl font-semibold mb-2">{program.title7}</h2>
          <p className="whitespace-pre-line">{program.detail7}</p>
        </section>
      )}

{program.other && (
  <section
    className=" mt-20 prose max-w-none"
    dangerouslySetInnerHTML={{
      __html: program.other.replace(
        /<a /g,
        '<a class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mt-11 " '
      ),
    }}
  />
)}

    </div>
  );
}
