import Link from "next/link";
import TrustBar from "@/components/TrustBar";

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">LegalMeter India</h1>
      <TrustBar />
      <p className="mb-6">
        Rule-based Indian compliance calculators designed for accuracy and
        speed.
      </p>

      <ul className="space-y-4">
        <li>
          <Link
            href="/gst-registration-eligibility-calculator"
            className="text-blue-600 underline"
          >
            GST Registration Eligibility Calculator
          </Link>
        </li>
        <li>
          <Link
            href="/professional-tax-calculator"
            className="text-blue-600 underline"
          >
            Professional Tax Calculator
          </Link>
        </li>
        <li>
          <Link
            href="/shop-act-license-eligibility"
            className="text-blue-600 underline"
          >
            Shop & Establishment Act Eligibility Checker
          </Link>
        </li>
      </ul>
    </>
  );
}
