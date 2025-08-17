export default function NewsSection() {
    const newsList = [
      {
        title: "New Feature Released",
        date: "2025-08-17",
        description: "We just launched an amazing new feature for all users.",
        href: "#",
      },
      {
        title: "Weekly Update",
        date: "2025-08-10",
        description: "Check out the latest improvements and bug fixes this week.",
        href: "#",
      },
      {
        title: "Community Event",
        date: "2025-08-05",
        description: "Join our online community event and meet other users.",
        href: "#",
      },
    ];
  
    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {newsList.map((news) => (
              <a
                key={news.title}
                href={news.href}
                className="block rounded-lg bg-white p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">{news.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{news.date}</p>
                <p className="mt-4 text-gray-700">{news.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  