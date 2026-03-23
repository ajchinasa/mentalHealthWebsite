import { ImpactStat } from "@/data/eap_service";
import ImpactSub from "@/assets/images/EAP/impact_subtract.png";
const Impact = () => {
  return (
    <div className="w-full px-5 py-20">
      <div className="w-full md:max-w-[1200px] mx-auto">
        <p className="text-3xl font-bold mb-16">Our Impact on Workplaces</p>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-12">
            {ImpactStat.map(
              (stat: { figure: string; header: string; body: string }) => (
                <div className="text-center flex flex-col gap-2">
                  <p className="font-switzerBold text-brand-secondary-customSkyBlue800 font-bold text-4xl">
                    {stat.figure}
                  </p>
                  <p className="text-brand-secondary-darkGrey font-bold">
                    {stat.header}
                  </p>
                  <p className="text-[#31405B]">{stat.body}</p>
                </div>
              ),
            )}
          </div>
          <img
            className="w-full md:w-2/5 object-cover rounded-xl"
            src={ImpactSub}
            alt="Our Impact"
          />
        </div>
      </div>
    </div>
  );
};

export default Impact;
