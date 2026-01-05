export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://legalmeter.vercel.app/sitemap.xml",
  };
}
