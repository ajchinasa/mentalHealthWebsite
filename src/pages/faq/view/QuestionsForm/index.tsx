import useQuestionsForm from "../../controller/useQuestionsForm";

const QuestionsForm = () => {
  const { formData, setFormData, handleChange } = useQuestionsForm();
  return (
    <form className="w-full lg:w-1/2 flex flex-col gap-5 ">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <label htmlFor="firstName" className="font-semibold text-sm">
            First Name
          </label>
          <input
            required
            type="text"
            className="w-full outline-none py-2 px-4 rounded-md border border-[#D0D8E7] text-sm mt-1"
            id="firstName"
            placeholder="John"
            value={formData?.firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="lastName" className="font-semibold text-sm">
            Last Name
          </label>
          <input
            type="text"
            className="w-full outline-none py-2 px-4 rounded-md border border-[#D0D8E7] text-sm mt-1"
            id="lastName"
            placeholder="Doe"
            required
            value={formData?.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <label htmlFor="workEmail" className="font-semibold text-sm">
            Email
          </label>
          {/* email input*/}
          <input
            type="email"
            className="w-full outline-none py-2 px-4 rounded-md border border-[#D0D8E7] text-sm mt-1"
            id="workEmail"
            placeholder="johndoe@company.com"
            required
            value={formData?.workEmail}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Phone Number */}
        <div className="w-full md:w-1/2">
          <label htmlFor="phoneNumber" className="font-semibold text-sm">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="123 4567 890"
            name="phoneNumber"
            id="phoneNumber"
            className="w-full outline-none py-2 px-4 rounded-md border border-[#D0D8E7] text-sm mt-1"
            value={formData?.phoneNumber}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="jobTitle" className="font-semibold text-sm">
          Message
        </label>
        {/* TEXT Input */}
        <textarea
          rows={4}
          className="w-full border border-gray-300 px-4 py-2 mt-2 rounded-md"
        ></textarea>
      </div>
      <div className="flex gap-3">
        <input
          type="checkbox"
          name="promotional"
          id="promotional"
          required
          // value={formData?.promotionals}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, promotional: e.target.checked }))
          }
        />
        <p className="text-sm">
          Receive promotional emails about our services and benefit
        </p>
      </div>
      <button
        type="submit"
        className="w-fit mr-auto bg-brand-secondary-customSkyBlue800 text-white px-5 py-2 rounded-lg font-bold"
      >
        Submit form
      </button>
    </form>
  );
};

export default QuestionsForm;
