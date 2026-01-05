export type ShopActInput = {
  state: string;
  employees: number;
};

export type ShopActResult = {
  required: "YES" | "NO";
  reason: string;
  warning: string;
};

export function checkShopActEligibility({
  employees,
}: ShopActInput): ShopActResult {
  if (employees >= 1) {
    return {
      required: "YES",
      reason:
        "Registration is mandatory if at least one employee is engaged.",
      warning:
        "Rules may vary slightly by state. Check local labour department.",
    };
  }

  return {
    required: "NO",
    reason:
      "Most states do not require registration with zero employees.",
    warning:
      "Some states may still require registration for commercial establishments.",
  };
}
