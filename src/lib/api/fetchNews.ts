

export async function fetchData<T>(endpoint: string): Promise<T[]> {
  const res = await fetch(`https://armaer-football.microcms.io/api/v1/${endpoint}`, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEWS_API_KEY!,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data.contents;
}
