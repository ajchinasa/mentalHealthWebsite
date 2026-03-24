import { FaFacebookF, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { TbCopy } from "react-icons/tb";
import { Link } from "react-router-dom";

interface SocialShareProps {
  url: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url }) => {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed.");
    }
  };
  return (
    <div className="w-full md:max-w-[900px] mx-auto flex flex-col gap-3">
      <p className="font-bold">Share this</p>
      <div className="flex items-center gap-5 text-brand-secondary-buttonText">
        <button
          className="flex gap-2 border-2 border-[#E5E5E7] p-2 items-center rounded-lg"
          onClick={() => handleCopyClick()}
        >
          <TbCopy />
          Copy link
        </button>
        {/* <Link
            className="text-3xl"
            to="https://www.instagram.com/friendnpal_/"
            target="_blank"
          >
            <FaInstagram />
          </Link> */}
        <Link
          className="text-3xl"
          to={`#`}
          target="_blank"
        >
          <FaSquareXTwitter />
        </Link>
        <Link
          className="text-3xl"
          to={`#`}
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link
          className="text-3xl"
          to={`#`}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default SocialShare;
