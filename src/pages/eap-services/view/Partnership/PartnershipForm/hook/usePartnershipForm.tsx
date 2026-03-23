import { useState } from "react";
import useGetCountry from "./useGetCountry";

export interface IPartnershipForm {
  firstName: string;
  lastName: string;
  workEmail: string;
  country: string;
  companyName: string;
  phoneNumber: string;
  no_of_employee: string;
  jobTitle: string;
}

const usePartnershipForm = () => {
  const [formData, setFormData] = useState<IPartnershipForm>({
    firstName: "",
    lastName: "",
    workEmail: "",
    country: "",
    companyName: "",
    phoneNumber: "",
    no_of_employee: "",
    jobTitle: "",
  });
  const [selectedCountry, setSelectedCountry] = useState<{
    [key: string]: any;
  }>();
  const { countries } = useGetCountry();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "country") {
      const seleted = countries.find((each) => each?.name?.common === value);
      setSelectedCountry(seleted);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const disableSubmit = Object.values(formData).some((item) => item === "");

  return {
    countries,
    selectedCountry,
    setSelectedCountry,
    formData,
    setFormData,
    handleChange,
    disableSubmit,
  };
};

export default usePartnershipForm;
