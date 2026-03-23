import { IChildrensForm } from "../../../../types/childrenForm";
import PaymentUpload from "./PaymentProof";

const ChildrensForm = ({
  formData,
  handleChange,
  selectedCountry,
  countries,
}: {
  formData: IChildrensForm;
  handleChange: (e: any) => void;
  selectedCountry:
    | {
        [key: string]: any;
      }
    | undefined;
  countries: {
    [key: string]: any;
  }[];
}) => {
  return (
    <form className="w-full  flex flex-col ">
      {/* First Name */}
      <label htmlFor="firstName" className="font-normal text-sm text-[#4D5154]">
        First Name
      </label>
      <input
        required
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Enter first name"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.firstName}
        onChange={handleChange}
      />

      {/* Last Name */}
      <label
        htmlFor="lastName"
        className="font-normal text-sm text-[#4D5154]  mt-4"
      >
        Last Name
      </label>
      <input
        required
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Enter last name"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.lastName}
        onChange={handleChange}
      />

      {/* Date of Birth */}
      <label htmlFor="dob" className="font-normal text-sm text-[#4D5154] mt-4">
        Date of Birth
      </label>
      <input
        required
        type="date"
        id="dob"
        name="dob"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.dob}
        onChange={handleChange}
      />

      {/* Gender */}
      <label
        htmlFor="gender"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Gender
      </label>
      <select
        required
        id="gender"
        name="gender"
        className="w-full py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="non-binary">Non-binary</option>
        <option value="prefer-not-to-say">Prefer not to say</option>
      </select>

      {/* Parent/Guardian Name */}
      <label
        htmlFor="guardianName"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Parent/Guardian Name
      </label>
      <input
        required
        type="text"
        id="guardianName"
        name="guardianName"
        placeholder="Enter here"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData.guardianName}
        onChange={handleChange}
      />

      {/* Email */}
      <label
        htmlFor="workEmail"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        E-mail
      </label>
      <input
        type="email"
        id="workEmail"
        name="workEmail"
        placeholder="Enter here"
        required
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Phone Number */}
      <label
        htmlFor="phoneNumber"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Phone Number
      </label>
      <div className="flex w-full mt-1">
        <div className="w-fit px-2 text-sm border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] rounded-l-md flex items-center gap-1">
          {selectedCountry?.flags ? (
            <>
              <img
                className="w-[25px]"
                src={selectedCountry?.flags?.png || selectedCountry?.flags?.svg}
                alt={selectedCountry?.flag?.alt}
              />
              <p>{`${selectedCountry?.idd?.root}${selectedCountry?.idd?.suffixes?.[0]}`}</p>
            </>
          ) : (
            "🏳️"
          )}
        </div>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="123 4567 890"
          className="w-full flex-1 px-2 py-2 border border-l-0 border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] rounded-r-md text-sm outline-none"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      {/* Country */}
      <label
        htmlFor="country"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Location
      </label>
      <select
        required
        id="country"
        name="country"
        className="w-full py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData?.country}
        onChange={handleChange}
      >
        <option value="">Select country</option>
        {countries.map((each) => (
          <option key={each?.name?.common} value={each?.name?.common}>
            {each?.name?.common}
          </option>
        ))}
      </select>

      {/* School Name */}
      <label
        htmlFor="schoolName"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        School Name
      </label>
      <input
        type="text"
        id="schoolName"
        name="schoolName"
        placeholder="Enter here"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D]  text-sm mt-1"
        value={formData.schoolName}
        onChange={handleChange}
      />

      {/* Grade */}
      <label
        htmlFor="grade"
        className="font-normal text-sm text-[#4D5154] mt-4"
      >
        Grade
      </label>
      <input
        type="text"
        id="grade"
        name="grade"
        placeholder="Enter here"
        className="w-full outline-none py-2 px-4 rounded-md border border-[#BABBBD] bg-[#F7F7F7] text-[#999B9D] text-sm mt-1"
        value={formData.grade}
        onChange={handleChange}
      />

      {/* Payment Upload */}
      <PaymentUpload />
    </form>
  );
};

export default ChildrensForm;
