"use client";

import { useState } from "react";
import {
  checkShopActEligibility,
  ShopActInput,
  ShopActResult,
} from "@/lib/logic/shopActLogic";
import { states } from "@/lib/constants/states";

export default function ShopActCalculator() {
  const [form, setForm] = useState<ShopActInput>({
    state: "",
    employees: 0,
  });

  const [result, setResult] = useState<ShopActResult | null>(null);

  return (
    <section className="max-w-xl mx-auto">
      {/* CARD */}
      <div className="bg-[#f6f8fc] rounded-2xl p-8 space-y-8">
        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-slate-900">
          Check Shop Act Requirement
        </h2>

        {/* FORM */}
        <div className="space-y-6">
          {/* STATE */}
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm text-slate-700">State</label>
            <select
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
              className="w-40 rounded-lg border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* EMPLOYEES */}
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm text-slate-700">
              Number of employees
            </label>
            <input
              type="number"
              min={0}
              value={form.employees}
              onChange={(e) =>
                setForm({
                  ...form,
                  employees: Number(e.target.value),
                })
              }
              className="w-40 rounded-lg border bg-white px-3 py-2 text-right text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => setResult(checkShopActEligibility(form))}
          className="w-full rounded-full bg-indigo-900 py-3 text-sm font-semibold text-white hover:bg-indigo-800 transition"
        >
          Check Eligibility
        </button>
      </div>

      {/* RESULT */}
      {result && (
        <div className="mt-6 rounded-xl border bg-white p-5 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-600">License required</span>
            <span
              className={`font-semibold ${
                result.required === "YES" ? "text-red-600" : "text-emerald-600"
              }`}
            >
              {result.required}
            </span>
          </div>

          <p className="text-slate-700">{result.reason}</p>

          <p className="text-amber-600 text-xs">{result.warning}</p>
        </div>
      )}
    </section>
  );
}
