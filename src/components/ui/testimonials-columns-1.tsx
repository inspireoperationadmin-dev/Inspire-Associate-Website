import React from "react";
import { motion, useInView } from "framer-motion";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const columnRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(columnRef, { amount: 0.15 });

  return (
    <div ref={columnRef} className={props.className}>
      <motion.div
        animate={isInView ? { translateY: "-50%" } : { translateY: "0%" }}
        transition={{
          duration: props.duration ?? 10,
          repeat: isInView ? Infinity : 0,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-purple-500/20 bg-[#0d0420]/80 backdrop-blur-md shadow-lg shadow-purple-900/20 max-w-xs w-full"
              >
                <p className="text-white/75 text-sm leading-relaxed">"{text}"</p>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-purple-500/30"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-white text-sm leading-5">{name}</div>
                    <div className="text-xs text-white/50 leading-5">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
