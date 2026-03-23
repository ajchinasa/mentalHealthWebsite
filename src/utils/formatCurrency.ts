export const formatCurrency = (amount: number) => {
  return `₦${new Intl.NumberFormat("en-NG").format(amount)}`;
};
