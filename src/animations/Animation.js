export const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2} },
  };
  export const nameAnimation = {
    hidden: { opacity: 0, y: 100, position: "absolute" },
    show: {
      opacity: 1,
      y: 0,
      position: "initial",
      transition: { duration: 0.5 },
    },
  };
  export const container = {
    hidden: { x: 10 },
    show: {
      x: 0,
      transition: { duration: 0.75, ease: "ease-out" },
      staggerChildren: 1,
      when: "afterChildren",
    },
  };