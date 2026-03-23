import { FaCloudArrowUp } from "react-icons/fa6";

const PaymentUpload = () => {
 
  return (
<div className="mt-6">
  <h3 className="font-semibold text-base text-[#2D384D] mb-2">Payments</h3>
  <div className="border border-dashed border-[#BABBBD] rounded-md p-8 bg-[#F7F7F7] flex flex-col items-center justify-center text-center">
  <FaCloudArrowUp className="w-10 h-10 text-[#BABBBD]"/>

    <p className="text-sm text-[#212529]">
      Upload payment Receipts
      <br />
      <span className="text-xs text-gray-400 text-[#4D5154]">SVG, PNG or JPG (2mb max file size)</span>
    </p>
    <label className="mt-3 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50">
      Browse Files
      <input type="file" accept=".svg,.png,.jpg,.jpeg" className="hidden" />
    </label>
  </div>
</div>
 );
};

export default PaymentUpload;
