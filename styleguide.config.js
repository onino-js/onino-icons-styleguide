module.exports = {
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Play",
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"Play", sans-serif',
    },
  },
  sections: [
    {
      name: "Introduction",
      content: "src/docs/introduction.md",
    },
    {
      name: "Wrappers",
      content: "src/docs/industry.md",
      components: "src/components/wrappers/*/*.js",
      exampleMode: "expand", // 'hide' | 'collapse' | 'expand'
      usageMode: "expand", // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Generic",
      content: "src/docs/generic.md",
      components: "src/components/generic/*/*.js",
      exampleMode: "expand", // 'hide' | 'collapse' | 'expand'
      usageMode: "expand", // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Industry",
      content: "src/docs/industry.md",
      components: "src/components/industry/*/*.js",
      exampleMode: "expand", // 'hide' | 'collapse' | 'expand'
      usageMode: "expand", // 'hide' | 'collapse' | 'expand'
    },
  ],
  // template: {
  //   links: [
  //     {
  //       rel: "stylesheet",
  //       type: "text/css",
  //       href: "src/App.css",
  //     },
  //   ],
  // },
};
