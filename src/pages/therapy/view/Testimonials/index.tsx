import testimonialImage from "@/assets/images/Therapy/testimonialImage.png";

const Testimonials = () => {
  return (
    <section className="w-full  py-20 relative overflow-hidden">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center px-4 relative ">
        {/* span */}
        <span className="bg-white text-[#006AB4] text-sm font-medium px-4 py-1 rounded-md mb-6">
          Testimonials
        </span>

        {/* Quote */}
        <h4 className="text-white text-2xl md:text-3xl font-semibold leading-relaxed mb-4 px-6">
          “The therapy session was packed with practical activities that I could
          use to cope. I loved that!”
        </h4>

        <p className="text-white text-sm font-medium">• Lauren-lorah</p>
      </div>

      {/*Image*/}
      <img
        src={testimonialImage}
        alt="testimonial decoration"
        className="hidden lg:block absolute right-0 top-0 w-1/2 opacity-70 pointer-events-none"
      />
    </section>
  );
};

export default Testimonials;
