module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      { 

        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          neutral: "#3d4451",
          darkis : "#3A4256",
          accent: "#37cdbe",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
