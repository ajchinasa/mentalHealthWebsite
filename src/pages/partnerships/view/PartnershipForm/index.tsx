import usePartnershiptForm from "../../controller/usePartnershipForm";

const PartnershipForm = () => {
  const { countries, selectedCountry, formData, setFormData, handleChange } =
    usePartnershiptForm();
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
            Work email
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
        <div className="w-full md:w-1/2">
          <label htmlFor="country" className="font-semibold text-sm">
            Country
          </label>
          <div className="py-2 px-4 rounded-xl border border-[#D0D8E7] mt-1 bg-white">
            <select
              name="country"
              id="country"
              className="outline-none w-full text-sm"
              required
              value={formData?.country}
              onChange={(e) => handleChange(e)}
            >
              <option>Select country</option>
              {countries.map((each) => (
                <option key={each?.name?.common} value={each?.name?.common}>
                  {/* <img
                    src={each?.flags?.png || each?.flags?.svg}
                    alt={each?.flags?.alt}
                  /> */}
                  {each?.name?.common}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* <div className="w-full md:w-1/2">
          <label htmlFor="country" className="font-semibold text-sm">
            Country
          </label>
          <input
            className="w-full outline-none py-2 px-4 rounded-md border border-[#D0D8E7] text-sm mt-1"
            id="country"
            name="country"
            placeholder="Select Country"
            required
            list="country-list"
            onChange={(e) => handleCountryChange(e.target.value)}
          />
          <datalist id="country-list">
            {countries.map((each) => (
              <option key={each?.name?.common} value={each?.name?.common}>
                {each?.name?.common}
              </option>
            ))}
          </datalist>
        </div> */}
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        {/* Company Name */}
        <div className="w-full md:w-1/2">
          <label htmlFor="companyName" className="font-semibold text-sm">
            Company Name
          </label>
          <input
            type="text"
            className="w-full outline-none py-2 px-4 rounded-md  border border-[#D0D8E7] text-sm mt-1"
            id="companyName"
            placeholder="XYZ Limited"
            required
            value={formData?.companyName}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Phone Number */}
        <div className="w-full md:w-1/2">
          <label htmlFor="phoneNumber" className="font-semibold text-sm">
            Phone Number
          </label>
          <div className="flex w-full mt-1">
            <div className="w-fit px-2 text-sm border border-[#D0D8E7] rounded-l-md flex">
              <div className="my-auto flex items-center gap-1">
                {selectedCountry?.flags ? (
                  <>
                    <img
                      className="w-[25px]"
                      src={
                        selectedCountry?.flags?.png ||
                        selectedCountry?.flags?.svg
                      }
                      alt={selectedCountry?.flag?.alt}
                    />
                    <p>{`${selectedCountry?.idd?.root}${selectedCountry?.idd?.suffixes?.[0]}`}</p>
                  </>
                ) : (
                  "🏳️"
                )}
              </div>
            </div>
            {/* <div className="px-2 text-sm outline-none border border-[#D0D8E7] rounded-l-md">
              <p></p>
            </div> */}

            {/* Phone Input */}
            <input
              type="tel"
              placeholder="123 4567 890"
              name="phoneNumber"
              id="phoneNumber"
              className="w-full flex-1 px-2 py-2 border border-l-0 border-[#D0D8E7] rounded-r-md text-sm outline-none"
              value={formData?.phoneNumber}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>

      <div>
        {/* Job Title */}
        <label htmlFor="jobTitle" className="font-semibold text-sm">
          Job Title
        </label>
        {/* Job Title Input */}
        <input
          type="text"
          className="w-full outline-none py-2 px-4 rounded-md border border-[#D0D8E7] text-sm mt-1"
          id="jobTitle"
          placeholder="UX designer"
          required
          list="job-titles"
        />
        <datalist id="job-titles">
          <option value="Software Engineer" />
          <option value="Data Analyst" />
          <option value="Project Manager" />
          <option value="Marketing Manager" />
          <option value="Sales Representative" />
          <option value="Graphic Designer" />
          <option value="Product Manager" />
          <option value="Human Resources Manager" />
          <option value="Accountant" />
          <option value="Business Analyst" />
          <option value="Customer Service Representative" />
          <option value="Operations Manager" />
          <option value="UX Designer" />
          <option value="Web Developer" />
          <option value="IT Support Specialist" />
          <option value="Financial Analyst" />
          <option value="Recruiter" />
          <option value="Administrative Assistant" />
          <option value="Content Writer" />
          <option value="Digital Marketing Specialist" />
          <option value="Network Administrator" />
          <option value="Social Media Manager" />
          <option value="Electrical Engineer" />
          <option value="Mechanical Engineer" />
          <option value="Civil Engineer" />
          <option value="Executive Assistant" />
          <option value="CEO" />
          <option value="CTO" />
          <option value="CFO" />
          <option value="Legal Assistant" />
        </datalist>
      </div>
      <div>
        <label htmlFor="jobTitle" className="font-semibold text-sm">
          How can we support your goals?
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

export default PartnershipForm;
