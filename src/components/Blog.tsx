type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Optimizing IT Operations for SMB Growth",
    excerpt:
      "Learn how structured IT management can reduce downtime and increase operational efficiency across small and medium businesses.",
    category: "IT Operations",
    date: "2026-01-10",
    link: "#",
  },
  {
    id: "2",
    title: "M&A Strategies for Small Businesses",
    excerpt:
      "Best practices for acquiring and scaling SMBs with a focus on operational and financial integration.",
    category: "M&A",
    date: "2026-02-05",
    link: "#",
  },
  {
    id: "3",
    title: "Scaling SMBs Through Technology and Process",
    excerpt:
      "How centralization, automation, and tech-driven workflows can accelerate SMB growth.",
    category: "Scaling SMBs",
    date: "2026-03-15",
    link: "#",
  },
  {
    id: "4",
    title: "Improving SEO to Position as an Authority",
    excerpt:
      "Step-by-step guide to optimize content and digital presence to establish thought leadership.",
    category: "SEO & Authority",
    date: "2026-04-01",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-background text-foreground fade-in">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
            Insights & Articles
          </h2>
          <p className="text-foreground/80 mt-2 max-w-2xl mx-auto">
            Strategic content focused on M&A, IT operations, scaling SMBs, and SEO to establish authority.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="block p-6 border border-primary rounded-lg hover:shadow-md transition bg-background/80 card"
            >
              <span className="text-sm text-foreground/60">{post.category}</span>
              <h3 className="text-xl font-semibold mt-2 text-primary">{post.title}</h3>
              <p className="text-foreground/80 mt-2 text-sm">{post.excerpt}</p>
              <span className="text-foreground/50 text-xs mt-4 block">{post.date}</span>
            </a>
          ))}
        </div>

        {/* CTA para futuro blog completo */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-primary-dark hover:bg-primary px-6 py-3 rounded text-white font-semibold transition"
          >
            View All Articles
          </a>
        </div>

      </div>
    </section>
  );
}