"use client";

import { useState } from "react";
import {
  calculateGSTEligibility,
  GSTInput,
  GSTResult,
} from "@/lib/logic/gstLogic";
import { states } from "@/lib/constants/states";

export default function GSTCalculator() {
  const [form, setForm] = useState<GSTInput>({
    income: 0,
    state: "",
    startMonth: "",
    interstate: false,
  });

  const [result, setResult] = useState<GSTResult | null>(null);

  return (
    <article
      aria-labelledby="gst-calculator-heading"
      className="max-w-xl mx-auto"
    >
      {/* INTRO PARAGRAPH */}
      <p className="mb-4 text-sm leading-relaxed text-slate-700">
        This GST registration eligibility calculator helps Indian freelancers,
        startups, and small businesses quickly check whether GST registration is
        mandatory based on their income, state, and business type, as per
        current Indian GST rules.
      </p>

      {/* TOOL CARD */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-8 shadow-sm space-y-8">
        {/* TITLE */}
        <header className="space-y-1">
          <h2
            id="gst-calculator-heading"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            GST Registration Eligibility Calculator
          </h2>
          <p className="text-xs text-slate-600">
            Based on latest GST rules applicable in India
          </p>
        </header>

        {/* FORM */}
        <div className="space-y-5">
          {/* Monthly Income */}
          <div className="flex items-center justify-between gap-4">
            <label
              htmlFor="monthly-income"
              className="text-sm font-medium text-slate-700"
            >
              Monthly income (₹)
            </label>
            <input
              id="monthly-income"
              name="monthly-income"
              type="number"
              min={0}
              value={form.income}
              onChange={(e) =>
                setForm({ ...form, income: Number(e.target.value) })
              }
              className="w-44 rounded-lg border border-slate-300 bg-white px-3 py-2 text-right text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* State */}
          <div className="flex items-center justify-between gap-4">
            <label
              htmlFor="state"
              className="text-sm font-medium text-slate-700"
            >
              State
            </label>
            <select
              id="state"
              name="state"
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
              className="w-44 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value="">Select state</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Start Month */}
          <div className="flex items-center justify-between gap-4">
            <label
              htmlFor="start-month"
              className="text-sm font-medium text-slate-700"
            >
              Business start month
            </label>
            <input
              id="start-month"
              name="start-month"
              type="month"
              value={form.startMonth}
              onChange={(e) => setForm({ ...form, startMonth: e.target.value })}
              className="w-44 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Interstate */}
          <div className="flex items-center justify-between gap-4">
            <label
              htmlFor="interstate"
              className="text-sm font-medium text-slate-700"
            >
              Interstate supply
            </label>
            <input
              id="interstate"
              name="interstate"
              type="checkbox"
              checked={form.interstate}
              onChange={(e) =>
                setForm({ ...form, interstate: e.target.checked })
              }
              className="h-4 w-4 accent-indigo-700"
            />
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => setResult(calculateGSTEligibility(form))}
          className="w-full rounded-full bg-indigo-900 py-3 text-sm font-semibold text-white hover:bg-indigo-800 transition focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          Check GST Requirement
        </button>
      </div>

      {/* RESULT */}
      {result && (
        <section
          aria-live="polite"
          className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">
              GST registration required
            </span>
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
                result.required === "YES"
                  ? "bg-red-100 text-red-700"
                  : "bg-emerald-100 text-emerald-700"
              }`}
            >
              {result.required}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">
              Applicable turnover threshold
            </span>
            <span className="text-sm font-semibold text-slate-900">
              {result.threshold}
            </span>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              GST mandatory from
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {result.mandatoryMonth}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-slate-700">
            {result.explanation}
          </p>

          <p className="text-xs leading-relaxed text-slate-600">
            Even if your turnover is below the GST threshold, GST registration
            may still be mandatory if you make interstate supplies or provide
            services through an e-commerce platform, as per GST law.
          </p>
        </section>
      )}

      {/* FAQ SECTION */}
      <section className="mt-10 space-y-5">
        <h3 className="text-base font-semibold text-slate-900">
          Frequently Asked Questions
        </h3>

        <div className="space-y-3 text-sm text-slate-700">
          <p>
            <strong>Do freelancers need GST registration in India?</strong>
            <br />
            Freelancers are required to register for GST if their annual
            turnover exceeds the applicable threshold limit or if they provide
            interstate services.
          </p>

          <p>
            <strong>What is the GST threshold limit for services?</strong>
            <br />
            For most Indian states, GST registration becomes mandatory when
            annual turnover exceeds ₹20 lakh. For special category states, the
            limit is ₹10 lakh.
          </p>

          <p>
            <strong>
              Is GST registration mandatory for interstate supply?
            </strong>
            <br />
            Yes, GST registration is mandatory for businesses making interstate
            supplies, even if their turnover is below the threshold limit.
          </p>
        </div>
      </section>
    </article>
  );
}
