export default function sitemap() {
  const base = "https://legalmeter.in";
  const today = new Date().toISOString().split("T")[0];

  const mainPages = [
    { url: base, priority: 1.0 },
    {
      url: `${base}/gst-registration-eligibility-calculator`,
      priority: 1.0,
    },
    {
      url: `${base}/professional-tax-calculator`,
      priority: 1.0,
    },
    {
      url: `${base}/shop-act-license-eligibility`,
      priority: 1.0,
    },
  ];

  const articlePages = [
    // ARTICLE ROOTS
    { url: `${base}/articles`, priority: 0.9 },
    { url: `${base}/articles/how-to-apply`, priority: 0.9 },

    // HOW TO APPLY SUB-PAGES
    {
      url: `${base}/articles/how-to-apply/apply-passport-online`,
      priority: 0.8,
    },
    {
      url: `${base}/articles/how-to-apply/apply-pan-card-online`,
      priority: 0.8,
    },
    {
      url: `${base}/articles/how-to-apply/aadhaar-card-update-online`,
      priority: 0.8,
    },
   

    // OTHER ARTICLES
    {
      url: `${base}/articles/file-police-complaint-online`,
      priority: 0.8,
    },
    {
      url: `${base}/articles/check-fir-status-online`,
      priority: 0.8,
    },
    {
      url: `${base}/articles/how-to-write-legal-notice`,
      priority: 0.8,
    },
    {
      url: `${base}/articles/wpl-women-athlete-rights`,
      priority: 0.8,
    },
    {
      url: `${base}/articles/ind-vs-nz-legal-guide`,
      priority: 0.8,
    },
  ];

  // COMBINE EVERYTHING WITH SEO PROPERTIES
  return [...mainPages, ...articlePages].map((item) => ({
    url: item.url,
    lastModified: today,
    changeFrequency: "monthly",
    priority: item.priority,
  }));
}
