import ChildBenefit from "@/components/ChildBenefits";
import { childBenefitsDataA, childBenefitsDataB } from "@/data/childBenefits";

const Benefits = () => {
  const allBenefits = [...childBenefitsDataA, ...childBenefitsDataB];

  return (
    <section className="w-full pt-32 md:pt-0 lg:pt-12 pb-4">
      <div className="text-left lg:flex md:justify-between md:items-start mb-10 w-full">
        <h4 className=" w-full lg:w-1/2 text-2xl md:text-4xl lg:text-semiLarge text-[#161B26] font-semibold font-switzer font-SemiBold">
          What Your Child Gains from AuraRest
        </h4>
        <p className="mt-4 md:mt-0 text-base text-[#31405B] w-full lg:w-1/2 font-normal font-switzerRegular">
          Our child-focused therapy sessions are crafted with care to nurture
          every aspect of your child’s well-being. With AuraRest, your child
          will experience:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBenefits.map((card, index) => (
          <ChildBenefit
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
