export function addMonths(startMonth: string, months: number): string {
  const d = new Date(startMonth);
  d.setMonth(d.getMonth() + months);
  return d.toISOString().slice(0, 7);
}
