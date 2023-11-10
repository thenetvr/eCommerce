// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
import SignUpForm from "../components/SignUp/SignUpForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  return (
    <motion.div
      className="flex flex-col items-center flex-grow"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      SignUp
      {/* form */}
      <SignUpForm />
              {/* toast container */}
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
              />
    </motion.div>
  );
}
