import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export const PhoneFrame = ({ children, className = "" }: PhoneFrameProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`phone-frame w-[280px] md:w-[320px] ${className}`}
    >
      <div className="phone-notch" />
      <div className="phone-screen aspect-[9/19.5] relative">
        {children}
      </div>
    </motion.div>
  );
};
