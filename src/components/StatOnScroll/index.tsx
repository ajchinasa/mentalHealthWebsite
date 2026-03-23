import StatCounter from "../StatCounter";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StatOnScroll = ({ target = 1000, duration = 2, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      {inView && (
        <StatCounter
          target={target}
          duration={duration}
          className={className}
        />
      )}
    </div>
  );
};

export default StatOnScroll;
