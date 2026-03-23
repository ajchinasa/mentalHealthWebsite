const WhoCanUsePal = () => {
  const WHO_CAN_USE_PAL: {
    id: string;
    header: string;
    description: string;
  }[] = [
    {
      id: "01",
      header: "Students & Young Adults",
      description:
        "Feeling overwhelmed by school, exams, or life changes? Pal offers a safe space to talk, reflect, and get support.",
    },
    {
      id: "02",
      header: "Working Professionals",
      description:
        "Struggling with burnout, anxiety, or workplace stress? Pal helps you manage your mental wellness on the go.",
    },
    {
      id: "03",
      header: "Parents & Caregivers",
      description:
        "Juggling family life and personal wellbeing? Pal gives you emotional check-ins and guidance when you need it.",
    },
    {
      id: "04",
      header: "Older Adults",
      description:
        "Dealing with loneliness, grief, or change? Pal is a friendly, familiar support system always just a message away.",
    },
    {
      id: "05",
      header: "Anyone in Need of a Listening Ear",
      description:
        "No matter your age, background, or story—Pal offers confidential, culturally aware mental health support in your language.",
    },
  ];
  return (
    <main className="px-5 bg-[rgba(247,247,247,1)] py-16">
      <div className="w-full md:max-w-[1200px] mx-auto">
        <div className="text-center text-[rgba(22,27,38,1)]">
          <h1 className="text-[24px] md:text-[36px] font-switzer font-semibold">
            Who Can Use Pal?
          </h1>
          <p className="text-[16px] md:w-[70%] mx-auto">
            Pal is for anyone seeking mental and emotional support&mdash;right
            from Whatsapp. Whether you're navigating daily stress or facing
            deeper challenges, Pal is here for you.
          </p>
        </div>

        <div className="pt-20 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {WHO_CAN_USE_PAL.slice(0, 3).map((each) => (
              <div className="pb-6 w-full max-w-[280px]" key={each.id}>
                <span className="text-[20px] font-switzer font-semibold text-[rgba(2,188,182,1)]">
                  {each.id}.
                </span>
                <h3 className="text-[18px] font-switzer pt-3">{each.header}</h3>
                <p className="text-[16px] text-[rgba(45,56,77,1)]">
                  {each.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-evenly">
            {WHO_CAN_USE_PAL.slice(3).map((each) => (
              <div className="pb-6 w-full max-w-[280px]" key={each.id}>
                <span className="text-[20px] font-switzer font-semibold text-[rgba(2,188,182,1)]">
                  {each.id}.
                </span>
                <h3 className="text-[18px] font-switzer pt-3">{each.header}</h3>
                <p className="text-[16px] text-[rgba(45,56,77,1)]">
                  {each.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhoCanUsePal;
