module.exports = {
  email: "taziur@mohsinconsulting.com",

  socialMedia: [
    // {
    //   name: "GitHub",
    //   url: "https://github.com/realmohsin",
    // },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61567245080560&mibextid=LQQJ4d",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/",
    },
    {
      name: "Twitter",
      url: "https://x.com/llcmohsin12633?s=11",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mohsin_consulting_llc/profilecard/?igsh=enl0OWl1bHJyNTRl",
    },
    // {
    //   name: "Codepen",
    //   url: "https://codepen.io/",
    // },
  ],

  navLinks: [
    {
      name: "Who We Are",
      url: "/#who-we-are",
    },
    {
      name: "What We Do",
      url: "/#what-we-do",
    },
    {
      name: "Our Work",
      url: "/#our-work",
    },
    {
      name: "Our Industries",
      url: "/#our-work",
    },
    {
      name: "Contact Us",
      url: "/#contact",
    },
  ],

  colors: {
    green: "#64ffda",
    navy: "#0a192f",
    darkNavy: "#020c1b",
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
