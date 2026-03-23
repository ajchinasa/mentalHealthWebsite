export type Package = {
  title: string;
  price: string;
  usdPrice: string;
  features: string[];
};

export type PackageCategory = "Children" | "Individuals" | "Couples";

export const categories: PackageCategory[] = [
  "Children",
  "Individuals",
  "Couples",
];
