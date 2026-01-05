export const states: string[] = [
  "Maharashtra",
  "Delhi",
  "Karnataka",
  "Tamil Nadu",
  "Kerala",
];

export function isSpecialCategoryState(state: string): boolean {
  return ["Himachal Pradesh", "Assam", "Meghalaya"].includes(state);
}
