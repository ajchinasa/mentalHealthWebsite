import usePaymentModal from "../../hooks/usePaymentModal";
import { MdCheckCircle } from "react-icons/md";
import Modal from "../core/Modal";

type Props = {
  title: string;
  offerings: any;
  location: string;
};

const PackageCard = ({ title, offerings, location }: Props) => {
  const {
    modal,
    setModal,
    email,
    setEmail,
    isButtonDisabled,
    handleSubmit,
    onClose,
  } = usePaymentModal(location);
  const rawPrice = offerings?.price || 0;
  const price = rawPrice?.toLocaleString("en-NG", {
    style: "currency",
    currency: location === "Nigeria" ? "NGN" : "USD",
    minimumFractionDigits: 0,
  });
  return (
    <>
      {modal && (
        <Modal
          open={modal.isOpen}
          onClose={onClose}
          closeIcon={true}
          showOnMobile={true}
        >
          <div className="w-full">
            <h3 className="text-xl font-bold text-[#161B26] mb-3">{`${title} Package`}</h3>
            <p className="text-2xl font-bold text-[#161B26] mb-6">{price}</p>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-400 text-gray-700 focus:outline-none rounded-md px-2 py-2 mb-4"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isButtonDisabled}
              className={`${
                isButtonDisabled
                  ? "opacity-80 bg-[#006AB4] cursor-not-allowed"
                  : "bg-[#006AB4] opacity-100"
              } rounded-full bg-[#006AB4] w-fit text-white font-semibold px-[24px] py-[10px] flex gap-2 items-center`}
            >
              <span>Pay Now</span>
            </button>
          </div>
        </Modal>
      )}
      <div className="bg-white border rounded-xl shadow-sm p-6 flex flex-col justify-between h-full transition-all duration-300 ease-in-out hover:-translate-y-4">
        <div>
          <h3 className="text-xl font-bold text-[#161B26] mb-3">{`${title} Package`}</h3>
          <p className="text-2xl font-bold text-[#161B26] mb-6">{price}</p>

          <div className="border-t border-gray-200 mt-4 pt-4">
            <h4 className="text-sm font-semibold uppercase text-[#161B26] mb-4">
              Offerings
            </h4>
            <ul className="space-y-2">
              {offerings?.details?.map((feature: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-[#384B6C]"
                >
                  <MdCheckCircle className="text-green-500 w-5 h-5 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          className="mt-6 bg-[#006AB4] text-white text-sm py-2 rounded-lg hover:bg-[#0051aa] transition"
          onClick={() => setModal({ isOpen: true, price: rawPrice })}
        >
          Book Package
        </button>
      </div>
    </>
  );
};

export default PackageCard;
