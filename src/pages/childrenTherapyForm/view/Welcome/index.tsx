const Welcome = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-6 pt-12 lg:pt-0">
      <h6 className="font-semibold text-2xl text-[#000000]">Welcome!</h6>
      <p className="text-sm text-[#161B26] font-normal">
        Thank you for choosing FriendnPal's therapy services. In order to better
        assist you, we kindly ask you to complete this intake form. The
        information you provide will be kept strictly confidential and will help
        us understand your needs and preferences. Please take your time to fill
        out the form accurately and thoroughly. If you have any questions or
        concerns, feel free to reach out to us at support@friendnpal.com. Your
        well-being is our priority, and we are committed to providing you with
        the support and care you deserve. Thank you for entrusting us with your
        journey towards healing and personal growth.
      </p>
      <div className="flex flex-col">
        <p className="font-medium text-[#000000] text-base">Instructions</p>
        <ul className="list-disc list-inside text-sm text-[#161B26] font-normal">
          <li>Please fill out all the fields to the best of your ability.</li>
          <li>If a question does not apply to you, you may leave it blank.</li>
          <li>
            Your honesty and openness are appreciated and will enable us to
            tailor our services to meet your needs effectively.
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-[#000000] text-base">Confidentiality</p>
        <p className="text-sm text-[#161B26] font-normal">
          All identifying information about your assessment and treatment is
          kept confidential, except as mandated by law. You would have to sign a
          release of information before any information about you is given to
          anyone, except as mandated by law. Learn more from our privacy policy
          and terms and conditions
        </p>
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-[#000000] text-base">Time Duration</p>
        <p className="text-sm text-[#161B26] font-normal">
          Your paid session lasts for either 30 minutes or 45 minutes, depending
          on the package you chose
        </p>
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-[#000000] text-base">Consent</p>
        <p className="text-sm text-[#161B26] font-normal">
          I consent to my email ID or other personal information being processed
          by FriendnPal for the sole purpose of contacting me for a therapy
          session.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
