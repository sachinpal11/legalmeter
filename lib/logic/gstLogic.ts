import { isSpecialCategoryState } from "../constants/states";
import { addMonths } from "../utils/dateUtils";
import { formatCurrency } from "../utils/formatCurrency";

export type GSTInput = {
  income: number;
  state: string;
  startMonth: string;
  interstate: boolean;
};

export type GSTResult = {
  required: "YES" | "NO";
  threshold: string;
  mandatoryMonth: string;
  explanation: string;
};

export function calculateGSTEligibility({
  income,
  state,
  startMonth,
  interstate,
}: GSTInput): GSTResult {
  if (interstate) {
    return {
      required: "YES",
      threshold: "No threshold",
      mandatoryMonth: startMonth,
      explanation:
        "GST registration is mandatory for interstate supply irrespective of turnover.",
    };
  }

  const threshold = isSpecialCategoryState(state) ? 1000000 : 2000000;
  const annualIncome = income * 12;

  if (annualIncome < threshold) {
    return {
      required: "NO",
      threshold: formatCurrency(threshold),
      mandatoryMonth: "Not applicable",
      explanation:
        "Annual turnover does not exceed GST threshold for the selected state.",
    };
  }

  const monthsToCross = Math.ceil(threshold / income);

  return {
    required: "YES",
    threshold: formatCurrency(threshold),
    mandatoryMonth: addMonths(startMonth, monthsToCross),
    explanation:
      "GST registration becomes mandatory once turnover crosses the prescribed threshold.",
  };
}
