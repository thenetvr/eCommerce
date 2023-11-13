// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";

export default function PlayerSearch() {
  return (
    <motion.div
      className="flex flex-col items-center flex-grow"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      PlayerSearch
    </motion.div>
  );
}