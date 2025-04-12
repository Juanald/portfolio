// Typewriter.tsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Typewriter = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    const handleTypingEffect = () => {
      let charIndex = 0;
      const typingSpeed = 150; // Speed of typing in ms
      const deletingSpeed = 100; // Speed of deleting in ms
      const pauseTime = 1000; // Pause time between typing and deleting

      const interval = setInterval(
        () => {
          if (!isDeleting && charIndex < text.length) {
            setDisplayedText((prev) => prev + text[charIndex]);
            charIndex++;
          } else if (isDeleting && charIndex > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
            charIndex--;
          }

          if (charIndex === text.length && !isDeleting) {
            setIsDeleting(true);
            setTimeout(() => {
              setLoopCount(loopCount + 1); // Increment loop count after typing is finished
            }, pauseTime); // Wait for a while before deleting
          } else if (charIndex === 0 && isDeleting) {
            setIsDeleting(false);
          }
        },
        isDeleting ? deletingSpeed : typingSpeed
      );

      return () => clearInterval(interval);
    };

    handleTypingEffect();
  }, [text, isDeleting, loopCount]);

  return (
    <motion.div
      className="text-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.div>
  );
};

export default Typewriter;
