import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInOut = ({ children, threshold }) => {
  const [ref, inView] = useInView({
    threshold: threshold || 0.2, // Trigger the animation when the element is 50% in view
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <AnimatePresence>
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{
                opacity: inView ? 1 : 0, // Fade in when in view, fade out when out of view
                // opacity: 1,
                transition: { duration: 0.5 },
                exit: 0,
            }}
        >
            {children}
        </motion.div>
    </AnimatePresence>
    
  );
};

export default FadeInOut;
