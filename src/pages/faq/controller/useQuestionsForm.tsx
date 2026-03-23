import { useState } from "react";
import useGetCountry from "./../../../hooks/useGetCountry";

export interface IPartnershipForm {
  firstName: string;
  lastName: string;
  workEmail: string;
  country: string;
  companyName: string;
  phoneNumber: string;
  jobTitle: string;
  message: string;
  promotionals: boolean;
}

const useQuestionsForm = () => {
  const [formData, setFormData] = useState<IPartnershipForm>({
    firstName: "",
    lastName: "",
    workEmail: "",
    country: "",
    companyName: "",
    phoneNumber: "",
    jobTitle: "",
    message: "",
    promotionals: false,
  });
  const [selectedCountry, setSelectedCountry] = useState<{
    [key: string]: any;
  }>();
  const { countries } = useGetCountry();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, " <<<<>>>> ", value);
    // setSelectedCountry(country);
    if (name === "country") {
      const seleted = countries.find((each) => each?.name?.common === value);
      setSelectedCountry(seleted);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    countries,
    selectedCountry,
    setSelectedCountry,
    formData,
    setFormData,
    handleChange,
  };
};
export default useQuestionsForm;
