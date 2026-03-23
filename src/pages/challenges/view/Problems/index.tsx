import { Problem, PROBLEM_CONTENT } from "@/data/challenges";

const Problems = () => {
  return (
    <main className="flex flex-col space-y-16 mb-20">
      {PROBLEM_CONTENT.map((eachProblem: Problem) => (
        <section>
          <h3 className="text-[rgba(2,188,182,1)] text-[24px] font-switzer font-semibold">
            0{eachProblem.id}/
          </h3>
          <h1 className="text-[24px] md:text-[32px] font-switzer text-[rgba(45,56,77,1)] font-semibold">
            The Problem
          </h1>
          <p className="text-[16px] text-[rgba(45,56,77,1)]">
            {eachProblem.title}
          </p>

          <div className="mt-3 flex flex-col space-y-3 md:flex-row md:space-y-0 md:justify-between md:space-x-6 md:items-stretch">
            {eachProblem.problems.map((eachContent) => (
              <span className="bg-[rgba(250,250,250,1)] shadow-sm rounded-[8px] p-6 md:w-[50%] flex-1 mt-2">
                <h1 className="text-[rgba(2,188,182,1)] text-[24px] font-switzer pb-4">
                  {eachContent.header}
                </h1>
                <p className="text-[rgba(45,56,77,1)] font-switzer">
                  {eachContent.content}
                </p>
              </span>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Problems;
