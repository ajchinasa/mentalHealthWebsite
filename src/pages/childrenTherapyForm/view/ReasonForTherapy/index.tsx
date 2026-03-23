import { IChildrensForm } from "../../../../types/childrenForm";

interface ReasonFormProps {
  formData: IChildrensForm;
  handleChange: (e: any) => void;
}

const ReasonForm: React.FC<ReasonFormProps> = ({ formData, handleChange }) => {
  return (
    <form className="w-full  flex flex-col ">
      {/* concerns */}
      <label htmlFor="concerns" className="font-normal text-sm text-[#4D5154]">
        What concerns prompted you to seek therapy for your child?
      </label>
      <input
        required
        type="text"
        id="concerns"
        name="concerns"
        placeholder="e.g., anxiety, behavioral issues,e.t.c"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.concerns}
        onChange={handleChange}
      />

      {/* HowLongHasYourChildBeenExperiencingTheseChallenges */}
      <label
        htmlFor="HowLongHasYourChildBeenExperiencingTheseChallenges"
        className="font-normal text-sm text-[#4D5154]  mt-4"
      >
        How long has your child been experiencing these challenges?
      </label>
      <input
        required
        type="text"
        id="HowLongHasYourChildBeenExperiencingTheseChallenges"
        name="HowLongHasYourChildBeenExperiencingTheseChallenges"
        placeholder="Enter here"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.HowLongHasYourChildBeenExperiencingTheseChallenges}
        onChange={handleChange}
      />

      {/* Why seek therapy */}
      <label
        htmlFor="WhySeekTherapy"
        className="font-normal text-sm text-[#4D5154]  mt-4"
      >
        What concerns prompted you to seek therapy for your child?
      </label>
      <input
        required
        type="text"
        id="WhySeekTherapy"
        name="WhySeekTherapy"
        placeholder="e.g., anxiety, behavioral issues,e.t.c"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.WhySeekTherapy}
        onChange={handleChange}
      />

      {/* Changes In Behaviour */}
      <label
        htmlFor="ChangesInBehaviour"
        className="font-normal text-sm text-[#4D5154]  mt-4"
      >
        Are there any recent changes in your child’s behavior?
      </label>
      <input
        required
        type="text"
        id="ChangesInBehaviour"
        name="ChangesInBehaviour"
        placeholder="e.g., anxiety, behavioral issues,e.t.c"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.ChangesInBehaviour}
        onChange={handleChange}
      />

      {/* Living Situation */}
      <label
        htmlFor="LivingSituation"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Who does your child live with?
      </label>
      <input
        required
        type="text"
        id="LivingSituation"
        name="LivingSituation"
        placeholder="e.g., both parents, single parent, guardian,"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.LivingSituation}
        onChange={handleChange}
      />

      {/* Family Dynamics */}
      <label
        htmlFor="FamilyDynamics"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Are there family dynamics that might affect the child’s well-being?
      </label>
      <input
        required
        type="text"
        id="FamilyDynamics"
        name="FamilyDynamics"
        placeholder="e.g., divorce"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.FamilyDynamics}
        onChange={handleChange}
      />

      {/* Support Network */}
      <label
        htmlFor="SupportNetwork"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Does your child have a support network of friends or family?
      </label>
      <input
        required
        type="text"
        id="SupportNetwork"
        name="SupportNetwork"
        placeholder="Enter here"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.SupportNetwork}
        onChange={handleChange}
      />

      {/*School Report */}
      <label
        htmlFor="SchoolReport"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Has your child’s school reported any concerns?
      </label>
      <input
        required
        type="text"
        id="SchoolReport"
        name="SchoolReport"
        placeholder="Yes/No"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.SchoolReport}
        onChange={handleChange}
      />

      {/*Academic Performance */}
      <label
        htmlFor="AcademicPerformance"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Does your child have difficulty with academic performance or
        concentration?
      </label>
      <input
        required
        type="text"
        id="AcademicPerformance"
        name="AcademicPerformance"
        placeholder="Yes/No"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.AcademicPerformance}
        onChange={handleChange}
      />

      {/*Mental Health Support */}
      <label
        htmlFor="MentalHealthSupport"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Has your child received any mental health support before?
      </label>
      <input
        required
        type="text"
        id="MentalHealthSupport"
        name="MentalHealthSupport"
        placeholder="Yes/No"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.MentalHealthSupport}
        onChange={handleChange}
      />

      {/*Medications*/}
      <label
        htmlFor="Medications"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Is your child currently on any medications?
      </label>
      <input
        required
        type="text"
        id="Medications"
        name="Medications"
        placeholder="Yes/No"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.Medications}
        onChange={handleChange}
      />

      {/*Outcome*/}
      <label
        htmlFor="*Outcome"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        What outcomes do you hope to achieve for your child through therapy?
      </label>
      <input
        required
        type="text"
        id="Outcome"
        name="Outcome"
        placeholder="Enter here"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.Outcome}
        onChange={handleChange}
      />

      {/*Behavior Focus*/}
      <label
        htmlFor="*BehaviorFocus"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Are there specific skills or behaviors you would like the therapist to
        focus on?
      </label>
      <input
        required
        type="text"
        id="BehaviorFocus"
        name="BehaviorFocus"
        placeholder="Enter here"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.BehaviorFocus}
        onChange={handleChange}
      />

      {/*Language Preference*/}
      <label
        htmlFor="*LanguagePreference"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Language Preference?
      </label>
      <input
        required
        type="text"
        id="LanguagePreference"
        name="LanguagePreference"
        placeholder="Enter here"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.LanguagePreference}
        onChange={handleChange}
      />

      {/*Referral Code*/}
      <label
        htmlFor="referralCode"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Referral Code (If you were referred by someone/organization)
      </label>
      <input
        required
        type="text"
        id="referralCode"
        name="referralCode"
        placeholder="Enter here"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.referralCode}
        onChange={handleChange}
      />
    </form>
  );
};

export default ReasonForm;
