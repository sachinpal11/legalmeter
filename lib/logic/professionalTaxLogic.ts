export type ProfessionalTaxInput = {
  salary: number;
  month: string;
};

export type ProfessionalTaxResult = {
  monthly: number;
  annual: number;
  explanation: string;
};

export function calculateProfessionalTax({
  salary,
  month,
}: ProfessionalTaxInput): ProfessionalTaxResult {
  const monthIndex = new Date(month).getMonth();
  let tax = 0;

  if (salary > 10000) tax = monthIndex === 1 ? 300 : 200;
  else if (salary > 7500) tax = 175;

  return {
    monthly: tax,
    annual: tax * 12,
    explanation:
      "Professional tax calculated as per Maharashtra state slabs.",
  };
}
