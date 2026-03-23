import { IChildrensForm } from "../../../types/childrenForm";
import useGetCountry from "../../../hooks/useGetCountry";
import { useState } from "react";

const useChildrensForm = () => {
  const [formData, setFormData] = useState<IChildrensForm>({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    guardianName: "",
    email: "",
    phoneNumber: "",
    country: "",
    schoolName: "",
    grade: "",
    promotionals: false,
    concerns: "",
    HowLongHasYourChildBeenExperiencingTheseChallenges: "",
    WhySeekTherapy: "",
    ChangesInBehaviour: "",
    LivingSituation: "",
    FamilyDynamics: "",
    SupportNetwork: "",
    SchoolReport: "",
    AcademicPerformance: "",
    MentalHealthSupport: "",
    Medications: "",
    Outcome: "",
    BehaviorFocus: "",
    LanguagePreference: "",
    referralCode: "",
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

export default useChildrensForm;
