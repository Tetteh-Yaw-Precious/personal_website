export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
  },
};

export const titleAnim = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1 },
  transition: { duration: 0.75, ease: "easeOut" },
};
export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};
export const photoAnim={
  hidden: {
    scale:1.3,
    Opacity: 0
  },
  show:{
    scale: 1,
    opacity: 1,
    transition:{ease: "easeOut", duration: 0.6}
  }
}
