export default function sitemap() {
  const base = "https://legalmeter.vercel.app";
  return [
    { url: base, priority: 1.0 },
    { url: `${base}/gst-registration-eligibility-calculator`, priority: 1.0 },
    { url: `${base}/professional-tax-calculator`, priority: 1.0 },
    { url: `${base}/shop-act-license-eligibility`, priority: 1.0 },
  ];
}
