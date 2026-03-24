import EmployeeCareImg from "@/assets/images/EAP/employee_care_subtract.png";
import foodGrain from "@/assets/images/EAP/food grain.png";
const EmployeeCare = () => {
  return (
    <div className="w-full px-5 py-24">
      <div className="w-full md:max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
        <img
          src={EmployeeCareImg}
          alt=""
          className="w-full lg:w-1/4 object-cover object-right rounded-lg"
        />
        <div className="w-full lg:w-3/4 flex flex-col gap-10">
          <div className="flex flex-col gap-5 ">
            <p className="font-bold text-4xl">
              Shaping the Future of Employee Care
            </p>
            <p className="text-brand-secondary-MidDarkGrey text-lg text-justify">
              At AuraRest, our Employee Assistance Program (EAP) is designed
              for today&apos;s dynamic workplace. We go beyond basic support to
              deliver mental health solutions that empower your team to thrive
              both at work and at home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white hover:bg-brand-primary-default text-brand-secondary-MidDarkGrey hover:text-white rounded-lg p-4 flex flex-col gap-3 transition-all duration-500 peer">
              <div className="bg-[#F0F8FF] peer-hover:bg-white py-1 px-1.5 rounded-lg w-fit">
                <img src={foodGrain} className="h-5" alt="" />
              </div>
              <p className="font-semibold">Accessible</p>
              <p className="text-sm text-justify">
                With AuraRest, employees enjoy instant access to high-quality
                mental health resources in an intuitive, engaging platform. Our
                goal is to make support effortless—so every team member feels
                empowered to care for their well-being, wherever they are
              </p>
            </div>
            <div className="bg-white hover:bg-brand-primary-default text-brand-secondary-MidDarkGrey hover:text-white rounded-lg p-4 flex flex-col gap-3 transition-all duration-500 peer">
              <div className="bg-[#F0F8FF] peer-hover:bg-white py-1 px-1.5 rounded-lg w-fit">
                <img src={foodGrain} className="h-5" alt="" />
              </div>
              <p className="font-semibold">Evidence-Based Care</p>
              <p className="text-sm text-justify">
                Our network of licensed professionals uses proven,
                evidence-based therapies to deliver compassionate, effective
                support. By blending innovative technology with personalized
                care, we ensure your employees connect with the right help in
                minutes
              </p>
            </div>
            <div className="bg-white hover:bg-brand-primary-default text-brand-secondary-MidDarkGrey hover:text-white rounded-lg p-4 flex flex-col gap-3 transition-all duration-500 peer">
              <div className="bg-[#F0F8FF] peer-hover:bg-white py-1 px-1.5 rounded-lg w-fit">
                <img src={foodGrain} className="h-5" alt="" />
              </div>
              <p className="font-semibold">Support That Delivers ROI</p>
              <p className="text-sm text-justify">
                Investing in mental health with AuraRest EAP brings real value
                to your organization. Companies that prioritize employee
                well-being see reduced healthcare costs, lower absenteeism, and
                boosted productivity. Every dollar spent returns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCare;
