import {
  privacyServices,
  policyPrinciples,
  informationCollected,
} from "@/data/policyData";

const Policy = () => {
  return (
    <div className="w-full py-4 text-gray-800 space-y-10 mb-12  font-switzerRegular">
      <section>
        <h4 className="text-4xl font-semibold mb-14">Privacy Policy</h4>
        <p className="mb-8 font-normal text-sm">
          This Policy applies to all visitors, data subjects, and others who
          access our Apps and Services ("User(s)" or "You/r"), including persons
          buying for teams ("Subscribers"). AuraRest CREATIVE CARE SOLUTIONS
          LIMITED ("Us", or "Our") operates the website (AuraRest.com and
          domains).
        </p>
        <p className="text-sm mb-4 font-medium">
          You may use our Apps to access one or more of our services and
          offerings (collectively the "Service(s)" or "AuraRest Service")
        </p>
        <ul className="list-disc list-inside text-sm space-y-2 mb-8">
          {privacyServices.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-sm mb-4 font-normal">
          We may also provide these and additional services on behalf of your
          Institution (“Institutional Services”). An Institution could be an
          enterprise, a university, a hospital, a research institution, or other
          public or private organisations. Institutional Services may involve
          processing information on behalf of the Institution. Where applicable,
          you must agree to the Terms of Service and Privacy Policies of both
          AuraRest and your Institution to proceed with using the
          Institutional Service.
        </p>
        <p className="text-sm mb-4 font-normal">
          By using any part of our Services, you understand that your
          information will be collected, used, and disclosed as outlined in this
          Privacy Policy
        </p>
        <p className="text-sm mb-4 font-normal">
          Before you use or submit any information through or in connection with
          the Platform, please carefully review this Privacy Policy. If you do
          not agree to the terms of this privacy policy, please do not use our
          Platform
        </p>
      </section>

      <section>
        <h4 className="text-2xl font-semibold mb-6">Our Principles</h4>
        <p className="text-sm mb-4 font-medium">
          AuraRest has designed this policy to be consistent with the
          following principles:
        </p>
        <ul className="list-disc list-inside text-sm space-y-2">
          {policyPrinciples.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4 className="text-2xl font-semibold mb-4">Information We Collect</h4>
        <p className="text-sm mb-4 font-medium">
          We collect information in several ways, including when you provide it
          to us, when it is automatically collected from your device, and
          through authorized third parties.
        </p>
        <p className="text-sm mb-2 font-medium">
          1. Information You Provide Directly to Us:
        </p>
        <ul className="list-disc list-inside text-sm space-y-2">
          {informationCollected.map((item, index) => (
            <li key={index}>
              <span className="font-semibold text-black">{item.title}:</span>{" "}
              {item.content}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Policy;
