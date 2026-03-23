"use client";

import PackageCard from "@/components/PackageCard";
import { motion } from "framer-motion";
import useTherapylogic from "../../controller/useTherapylogic";

const Packages = () => {
  const { categories, activeTab, setActiveTab, therapyPackages, location } =
    useTherapylogic();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-10 text-[#161B26]">
          Therapy Packages For Friendpal
        </h2>

        {/* Tabs */}
        <div className="inline-flex bg-[#F3F4F6] px-2 py-1 rounded-md">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 text-sm rounded-md font-normal transition-colors duration-300 ${
                activeTab === category
                  ? "bg-white text-[#161B26] shadow-sm"
                  : "text-[#6B7280]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Package Cards */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {therapyPackages?.[activeTab]?.map((pkg: any) => (
          <motion.div
            key={pkg?._id}
            variants={cardVariants}
            className="last:md:col-span-full last:lg:col-span-1"
          >
            <PackageCard
              title={pkg?.tier}
              offerings={pkg?.offerings}
              location={location}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Packages;
