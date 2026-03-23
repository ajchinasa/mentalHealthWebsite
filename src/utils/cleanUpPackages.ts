type RefinedOffering = {
  description: string;
  price: number;
  details: string[];
  noOfSessions: number;
  _id: string;
};

type RefinedPackage = {
  offerings: RefinedOffering;
  tier: string;
  _id: string;
};

export type RefinedType = {
  _id: string;
  type: string;
  packages: RefinedPackage[];
};

export const cleanUpPackages = (
  unrefinedData: any[],
  location: string,
): RefinedType[] => {
  return unrefinedData.map((item) => ({
    _id: item._id,
    type: item.type,
    packages: item.packages.map((pkg: any) => {
      const offering =
        location === "Nigeria"
          ? pkg.offerings.nigeria
          : pkg.offerings.international;
      return {
        offerings: {
          description: offering.description,
          price: offering.price,
          details: offering.details,
          noOfSessions: offering.noOfSessions,
          _id: offering._id,
        },
        tier: pkg.tier,
        _id: pkg._id,
      };
    }),
  }));
};
