import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import useValidateEmail from "./useValidateEmail";

const usePaymentModal = (location: string) => {
  const publicKey = import.meta.env.VITE_PAYSTACK_LIVE_KEY;
  // const publicKey = import.meta.env.VITE_PAYSTACK_TEST_KEY;
  const rate = import.meta.env.VITE_DOLLAR_RATE;
  const formUrl = import.meta.env.VITE_FORM_URL;
  const [modal, setModal] = useState({ isOpen: false, price: 0 });
  const [email, setEmail] = useState<string>("");
  const { validate } = useValidateEmail();

  const config = {
    reference: Date.now().toString(),
    email,
    amount:
      location === "Nigeria"
        ? Math.round(Number(modal.price) * 100)
        : Math.round(Number(modal.price) * Number(rate) * 100),
    publicKey,
  };

  const onSuccess = () => {
    setModal({ isOpen: false, price: 0 });
    // const paymentRef = response.reference;
    globalThis.location.href = formUrl;
    // window.location.href = `/success?paymentRef=${paymentRef}`;
  };

  const onClose = () => {
    setModal({ isOpen: false, price: 0 });
    setEmail("");
  };

  const initializePayment = usePaystackPayment(config);

  const isButtonDisabled = !(modal.price && email && validate(email));

  const handleSubmit = () => {
    initializePayment({ onSuccess, onClose });
  };
  return {
    modal,
    setModal,
    email,
    setEmail,
    isButtonDisabled,
    handleSubmit,
    onClose,
  };
};

export default usePaymentModal;
