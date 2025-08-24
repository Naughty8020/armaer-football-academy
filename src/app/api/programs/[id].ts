// lib/api.ts
export const fetchProgramById = async (id: string) => {
    const res = await fetch(`https://<YOUR_MICROCMS_DOMAIN>.microcms.io/api/v1/program/${id}`, {
      headers: {
        'X-API-KEY': process.env.MICROCMS_API_KEY ?? '',
      },
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch program');
    }
  
    return res.json();
  };
  