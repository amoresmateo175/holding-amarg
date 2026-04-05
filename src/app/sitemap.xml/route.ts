// app/sitemap.xml/route.ts
type BlogPost = {
  slug: string;
  updatedAt: string;
};

// Simula fetch a backend
async function getBlogPosts(): Promise<BlogPost[]> {
  return [
    { slug: "optimizing-it-operations", updatedAt: "2026-01-10" },
    { slug: "ma-strategies-smb", updatedAt: "2026-02-05" },
    { slug: "scaling-smbs-tech", updatedAt: "2026-03-15" },
    { slug: "improving-seo-authority", updatedAt: "2026-04-01" },
  ];
}

export async function GET() {
  const baseUrl = "https://www.tu-dominio.com";

  // Rutas estáticas
  const staticRoutes = [
    { url: "/", updatedAt: "2026-01-01" },
    { url: "/about", updatedAt: "2026-01-01" },
    { url: "/portfolio", updatedAt: "2026-01-01" },
    { url: "/operations", updatedAt: "2026-01-01" },
    { url: "/blog", updatedAt: "2026-01-01" },
    { url: "/contact", updatedAt: "2026-01-01" },
  ];

  // Rutas dinámicas del blog
  const blogPosts = await getBlogPosts();
  const blogRoutes = blogPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    updatedAt: post.updatedAt,
  }));

  // Combinar todas las rutas
  const allRoutes = [...staticRoutes, ...blogRoutes];

  // Generar XML
  const urlsXml = allRoutes
    .map(
      (route) => `<url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.updatedAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("\n");

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=59",
    },
  });
}