export function formatAmount(amount: number): string {
  if (Number.isNaN(amount)) {
    return "00";
  }

  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
