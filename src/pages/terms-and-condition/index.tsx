import {
  acceptableUsage,
  indemnity,
  liability,
  prohibitedUse,
  userAccountAndSecurity,
} from "@/data/policyData";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div className="my-16 w-full md:max-w-[1200px] mx-auto px-5 font-switzerRegular">
      <section>
        <h4 className="text-4xl font-semibold mb-14">Terms of Service</h4>
        <p className="mb-8 font-normal text-sm">
          These Terms of Service (the “Terms”) constitute a legally binding
          agreement between you and FriendnPal Creative Care Solutions
          (“FriendnPal, ” “we, ” “our, ” or “us”) governing your access to and
          use of the FriendnPal website located at{" "}
          <Link
            to={"https://www.friendnpal.com/"}
            target="_blank"
            className="underline text-blue-700"
          >
            https://www.friendnpal.com/
          </Link>{" "}
          (the “Site”) and FriendnPal related services (collectively with the
          Site, the “Services”). By using this website, any of our websites,
          applications, and/or services, you agree to these Terms of Service.
        </p>
        <p className="text-sm mb-4 font-medium">
          These Terms (formerly known as the Statement of Rights and
          Responsibilities) make up the entire agreement between you and
          FriendnPal regarding your use of our Services. Our{" "}
          <Link to={"/privacy-policy"} target="_blank" className="">
            Privacy Policy
          </Link>{" "}
          is incorporated by reference into these Terms of Service. You can also
          go to your settings pages of the relevant product offering at any time
          to review the privacy choices that you have about how we use your
          data.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">About Us</h4>
        <p className="text-sm mb-4 font-medium">
          FriendnPal Creative Care Solutions (hereinafter referred to as
          "FriendnPal") is Africa&apos;s first AI-powered, multilingual mental
          health support platform designed to make mental wellness accessible,
          affordable, and stigma-free. We serve individuals, families,
          businesses, and underserved communities across Africa and beyond by
          transforming complex mental health and behavioral care needs into
          seamless, human-centered, and intelligent experiences.
        </p>
        <p className="text-sm mb-4 font-medium">
          At FriendnPal, we integrate AI-guided support, 24/7 anonymous access,
          and evidence-based resources into a continuous mental healthcare
          journey, reaching users through an app and even WhatsApp for
          low-connectivity areas. With a mission rooted in lived experiences and
          supported by deep clinical expertise, we deliver personalized mental
          health solutions that are up to 10x more affordable than traditional
          therapy.
        </p>
        <p className="text-sm mb-4 font-medium">
          These Terms of Service agreement outlines your rights and
          responsibilities when engaging with FriendnPal&apos;s services. By
          accessing our website or using any of our digital platforms, you
          accept and agree to the provisions outlined herein.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">Use of Our Services</h4>
        <p className="text-sm mb-4 font-medium">
          Our mission is to revolutionize mental health support in Africa as the
          first AI-powered app with multilingual capabilities, reflecting our
          commitment to inclusivity and accessibility, ensuring that support is
          available to everyone, regardless of language barriers. At FriendnPal,
          our dedicated team is driven by a shared passion for mental health
          advocacy and innovation. With diverse backgrounds and expertise, we
          are united in our mission to make a positive impact on the lives of
          individuals across Africa. Together, we are committed to harnessing
          the power of technology and compassion to create a platform that
          empowers individuals to prioritize their mental well-being.
        </p>
        <p className="text-sm mb-4 font-medium">
          To operate our global services and enable you to connect with our
          in-house therapist, we need to transfer, store, and distribute content
          to our blog, partners, service providers, vendors, and systems around
          the world, including outside your country of residence. The use of
          this global infrastructure is essential to provide our services. This
          infrastructure may be owned, operated, or controlled by FriendnPal.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">
          User Accounts and Account Security
        </h4>
        <p className="text-sm mb-4 font-medium">
          To access certain features of FriendnPal, you may need to create an
          account. You agree to:
        </p>
        <ol className="list-[lower-alpha] list-inside text-sm space-y-2 mb-4">
          {userAccountAndSecurity.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <p className="text-sm mb-4 font-medium">
          FriendnPal is not responsible for any loss or damage arising from
          unauthorized access due to your failure to secure your account. We
          reserve the right to suspend or terminate accounts that violate our
          policies.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">
          Prohibited Uses and Activities
        </h4>
        <p className="text-sm mb-4 font-medium">
          Users of FriendnPal must not:
        </p>
        <ol className="list-decimal list-inside text-sm space-y-2 mb-4">
          {prohibitedUse.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <p className="text-sm mb-4 font-medium">
          Violations of these rules may result in service termination and legal
          action.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">Data Privacy Policy</h4>
        <p className="text-sm mb-4 font-medium">
          Our collection and use of personal data are governed by our Privacy
          Policy. By using the Service, you consent to the collection, use, and
          sharing of your data as described. We do not sell your data, and we do
          not share information that directly identifies you (such as your name,
          email address, or other contact information) unless you give us
          specific permission.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">Intellectual Property</h4>
        <p className="text-sm mb-4 font-medium">
          All intellectual property rights, including copyrights, trademarks,
          patents, and trade secrets, in the FriendnPal platform, services, and
          content (excluding user-generated content) are owned by FriendnPal or
          its licensors. You agree not to copy, modify, distribute, sell, or
          lease any part of our services without our written permission. All
          content on the platform, including text, images, software, and
          designs, is protected by copyright and owned by FriendnPal or its
          licensors. Unauthorized use, reproduction, or distribution of our
          copyrighted materials is strictly prohibited.
        </p>
        <p className="text-sm mb-4 font-medium">
          You retain ownership of any content you submit to the platform, but
          grant FriendnPal a non-exclusive, worldwide, royalty-free license to
          use, store, display, reproduce, and distribute your content for
          platform-related purposes.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">
          General Use of the Website and Portal (Acceptable Usage)
        </h4>
        <p className="text-sm mb-4 font-medium">
          You are independently responsible for complying with all applicable
          laws related to your use of our website and services. However, by
          accessing or using the FriendnPal platform, you agree to comply with
          the terms and conditions of our Acceptable Usage Policy.
        </p>
        <p className="text-sm mb-4 font-medium">
          You agree to use the FriendnPal website and portal only for lawful
          purposes. You shall not:
        </p>
        <ol className="list-[lower-alpha] list-inside text-sm space-y-2 mb-4">
          {acceptableUsage.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <p className="text-sm mb-4 font-medium">
          We reserve the right to suspend or terminate access to the platform if
          we determine, in our sole discretion, that a user has violated these
          terms
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">Indemnity</h4>
        <p className="text-sm mb-4 font-medium">
          By using FriendnPal&apos;s services, you agree to indemnify, defend,
          and hold harmless FriendnPal, its affiliates, directors, officers,
          employees, agents, and partners from and against any claims,
          liabilities, damages, losses, and expenses (including legal fees)
          arising out of or in any way connected with:
        </p>

        <ol className="list-[lower-alpha] list-inside text-sm space-y-2 mb-4">
          {indemnity.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <p className="text-sm mb-4 font-medium">
          We reserve the right to assume exclusive defence and control of any
          matter subject to indemnification, and you agree to cooperate in our
          defence.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">Limitation of Liability</h4>
        <p className="text-sm mb-4 font-medium">
          In no event will FriendnPal be liable for:
        </p>

        <ol className="list-[lower-alpha] list-inside text-sm space-y-2 mb-4">
          {liability.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">Disclaimer</h4>
        <p className="text-sm mb-4 font-medium">
          WE TRY TO KEEP THE FRIENDNPAL PLATFORM AVAILABLE AT ALL TIMES,
          BUG-FREE AND SAFE. HOWEVER, YOU USE IT AT YOUR OWN RISK.
        </p>
        <p className="text-sm mb-4 font-medium">
          OUR WEBSITE AND SERVICES ARE PROVIDED “AS IS” WITHOUT ANY EXPRESS,
          IMPLIED, AND/OR STATUTORY WARRANTIES (INCLUDING, BUT NOT LIMITED TO,
          ANY IMPLIED OR STATUTORY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR USE OR PURPOSE, TITLE, AND NON-INFRINGEMENT OF INTELLECTUAL
          PROPERTY RIGHTS). WITHOUT LIMITING THE GENERALITY OF THE FOREGOING,
          FriendnPal MAKES NO WARRANTY THAT OUR WEBSITE AND SERVICES WILL MEET
          YOUR REQUIREMENTS OR THAT OUR WEBSITE WILL BE UNINTERRUPTED, TIMELY,
          SECURE, OR ERROR-FREE. NO ADVICE OR INFORMATION, WHETHER ORAL OR
          WRITTEN, OBTAINED BY YOU THROUGH OUR WEBSITE OR FROM FRIENDNPAL, ITS
          PARENTS, SUBSIDIARIES, OR OTHER AFFILIATED COMPANIES, OR ITS OR THEIR
          SUPPLIERS (OR THE RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS
          OF ANY SUCH ENTITIES) (COLLECTIVELY, PARTIES") SHALL CREATE ANY
          WARRANTY.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">
          Right To Information Sharing
        </h4>
        <p className="text-sm mb-4 font-medium">
          FriendnPal has the right to share information about users and their
          transactions with regulators, acquirers, issuers, law enforcement, and
          other authorities to comply with legal requirements. This sharing is
          important to prevent fraud, investigate suspicious transactions, and
          maintain the security of our platform.
        </p>
        <p className="text-sm mb-4 font-medium">
          This information sharing is also crucial for us to fulfill our
          responsibilities as a trusted intermediary, allowing us to respond
          quickly to potential risks and support a transparent service
          environment that promotes trust for all parties.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">
          Updates, Modifications & Amendments
        </h4>
        <p className="text-sm mb-4 font-medium">
          We may need to update, modify, or amend our Terms of Service as our
          technology evolves. We reserve the right to make changes to these
          Terms of Service at any time by giving notice to users on this page.
          When we make updates, we will inform all users via the email they used
          to register their account on our platform.
        </p>
        <p className="text-sm mb-4 font-medium">
          We advise that you check this page often, referring to the date of the
          last modification on the page. If a User objects to any of the changes
          to the Terms of Service, the User must cease using our website and/or
          services immediately.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">
          Electronic Signatures and Legal Notices
        </h4>
        <p className="text-sm mb-4 font-medium">
          By using FriendnPal, you consent to receive electronic communications
          from us. You agree that electronic agreements, notices, disclosures,
          and other communications satisfy any legal requirement that such
          communications be in writing. You acknowledge that electronic
          signatures provided through our platform are legally binding and
          enforceable. Any disputes regarding electronic transactions will be
          resolved in accordance with applicable laws.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">Applicable Law</h4>
        <p className="text-sm mb-4 font-medium">
          These Terms of Service shall be interpreted and governed by the laws
          currently in force in the Federal Republic of Nigeria and the United
          States.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">Legal Disputes</h4>
        <p className="text-sm mb-4 font-medium">
          We shall make an effort to settle all disputes amicably. Any dispute
          arising out of this Terms of Service, which cannot be settled, by
          mutual agreement/negotiation within 1 (one) month shall be submitted
          for mediation under the rules of a mutually agreed mediation center in
          Nigeria, failing which the aggrieved Party shall seek redress in a
          Court of competent jurisdiction in Nigeria.
        </p>
      </section>
      <section>
        <h4 className="text-2xl font-semibold mb-6">Severability</h4>
        <p className="text-sm mb-4 font-medium">
          If any portion of these Terms of Service is held by any court or
          tribunal to be invalid or unenforceable, either in whole or in part,
          then that part shall be severed from these Terms of Service and shall
          not affect the validity or enforceability of any other part in these
          Terms of Service.
        </p>
      </section>
      <p className="text-sm mb-4 font-medium">
        For further inquiries, contact us{" "}
        <Link to={"/about-us"} className="underline text-blue-700">
          here
        </Link>
        .
      </p>
    </div>
  );
};

export default TermsAndCondition;
