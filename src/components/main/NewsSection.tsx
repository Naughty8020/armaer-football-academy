import { NewsItem } from "@/lib/news";
import { fetchData } from "@/lib/fetchData";


export default async  function NewsSection() {

  
  
    

  
  const news = await fetchData<NewsItem>("news");
   
console.log(news);

    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
          <div className="flex flex-col gap-6">
            {news && news.length > 0 ? (
              news.map((item: NewsItem) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex gap-4 p-4 bg-white rounded shadow hover:bg-gray-100 transition"
                >
                  {item.images && (
                    <img
                      src={item.images.url}
                      alt={item.title}
                      className="w-32 h-20 object-cover rounded"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <p className="mt-2 text-gray-700">{item.contents}</p>
                  </div>
                </a>
              ))
            ) : (
              <p className="text-gray-500 text-center">ニュースはまだありません</p>
            )}
          </div>
        </div>
      </section>
    );
  }