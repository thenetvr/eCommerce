export const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    // apply 'transition' with variants
    transition: {
      delay: 0.5,
      type: "spring",
    },
  },
  // 'exit' animation / animating routes
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

export const fadeInLeftVariants = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  inView: {
    opacity: 1,
    x: 0
  },
  viewport: {
    once: true,
    amount: 0.2
  },
  transition: {
    type: "tween",
    ease: "easeOut",
    duration: 1
  }
}

export const fadeInRightVariants = {
  hidden: {
    x: 80,
    opacity: 0,
  },
  inView: {
    opacity: 1,
    x: 0
  },
  viewport: {
    once: true,
    amount: 0.2
  },
  transition: {
    type: "tween",
    ease: "easeOut",
    duration: 1
  }
}
