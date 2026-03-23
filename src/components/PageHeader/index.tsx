import headerBgImage from "@/assets/images/header-bgImage.png";

type ComponentProp = {
  headerText: string;
  headerParagraph1: string;
  headerParagraph2: string;
};

const PageHeader = ({
  headerText,
  headerParagraph1,
  headerParagraph2,
}: ComponentProp) => {
  return (
    <main
      style={{ backgroundImage: `url(${headerBgImage})` }}
      className="bg-[rgba(2,188,182,1)] bg-cover bg-no-repeat bg-top h-[400px] mx-auto flex items-center justify-center w-full lg:bg-right"
    >
      <section className="text-center text-black">
        <h1 className="font-switzer text-[30px] font-semibold pb-4 md:text-[45px] lg:text-[60px] md:w-[70%] w-[90%] lg:w-[60%] mx-auto">
          {headerText}
        </h1>
        <p className="text-[16px] w-[90%] mx-auto lg:text-[18px] lg:w-[70%]">
          {headerParagraph1}
        </p>
        <p className="text-[16px] w-[90%] mx-auto lg:text-[18px] lg:w-[70%]">
          {headerParagraph2}
        </p>
      </section>
    </main>
  );
};

export default PageHeader;
