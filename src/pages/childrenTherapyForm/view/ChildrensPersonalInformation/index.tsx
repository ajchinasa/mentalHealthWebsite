import useChildrensForm from "../../controller/useChildrensForm";
import ChildrensForm from "../ChildrensForm";
import ReasonForm from "../ReasonForTherapy";
import Submit from "../Submit";

const ChildrensPersonalInformation = () => {
  const { countries, selectedCountry, formData, handleChange } =
    useChildrensForm();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <p className="font-medium text-[#2D384D] text-lg">
            Child&apos;s Personal Information
          </p>
          <ChildrensForm
            formData={formData}
            handleChange={handleChange}
            selectedCountry={selectedCountry}
            countries={countries}
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <p className="font-medium text-[#2D384D] text-lg">
            Reason For Therapy
          </p>
          <ReasonForm formData={formData} handleChange={handleChange} />
        </div>
      </div>
      <Submit />
    </div>
  );
};

export default ChildrensPersonalInformation;
