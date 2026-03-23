import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const StatCounter = ({ target = 1000, duration = 2, className = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, target, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(v);
    });

    return unsubscribe;
  }, [rounded]);

  return <motion.h1 className={className}>{display}</motion.h1>;
};

export default StatCounter;
