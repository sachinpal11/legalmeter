"use client";

import { useState } from "react";
import {
  calculateProfessionalTax,
  ProfessionalTaxInput,
  ProfessionalTaxResult,
} from "@/lib/logic/professionalTaxLogic";

export default function ProfessionalTaxCalculator() {
  const [form, setForm] = useState<ProfessionalTaxInput>({
    salary: 0,
    month: "",
  });

  const [result, setResult] = useState<ProfessionalTaxResult | null>(null);

  return (
    <section
      aria-labelledby="pt-calculator-heading"
      className="max-w-xl mx-auto"
    >
      {/* CARD */}
      <div className="bg-[#f6f8fc] rounded-2xl p-8 space-y-8">
        {/* TITLE */}
        <h2
          id="pt-calculator-heading"
          className="text-2xl font-semibold text-slate-900"
        >
          Professional Tax Calculator
        </h2>

        {/* FORM */}
        <div className="space-y-6">
          {/* SALARY */}
          <div className="flex items-center justify-between gap-4">
            <label
              htmlFor="monthly-salary"
              className="text-sm font-medium text-slate-700"
            >
              Monthly salary (₹)
            </label>
            <input
              id="monthly-salary"
              name="monthly-salary"
              type="number"
              min={0}
              value={form.salary}
              onChange={(e) =>
                setForm({ ...form, salary: Number(e.target.value) })
              }
              className="w-40 rounded-lg border bg-white px-3 py-2 text-right text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* MONTH */}
          <div className="flex items-center justify-between gap-4">
            <label
              htmlFor="salary-month"
              className="text-sm font-medium text-slate-700"
            >
              Salary month
            </label>
            <input
              id="salary-month"
              name="salary-month"
              type="month"
              value={form.month}
              onChange={(e) => setForm({ ...form, month: e.target.value })}
              className="w-40 rounded-lg border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => setResult(calculateProfessionalTax(form))}
          className="w-full rounded-full bg-indigo-900 py-3 text-sm font-semibold text-white hover:bg-indigo-800 transition focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          Calculate Professional Tax
        </button>
      </div>

      {/* RESULT */}
      {result && (
        <section
          aria-live="polite"
          className="mt-6 rounded-xl border bg-white p-5 space-y-3 text-sm"
        >
          <div className="flex justify-between">
            <span className="text-slate-600">Monthly professional tax</span>
            <span className="font-semibold text-slate-900">
              ₹{result.monthly}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-600">Annual professional tax</span>
            <span className="font-semibold text-slate-900">
              ₹{result.annual}
            </span>
          </div>

          <p className="pt-2 text-slate-600">{result.explanation}</p>
        </section>
      )}
    </section>
  );
}
