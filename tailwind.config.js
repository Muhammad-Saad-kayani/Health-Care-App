/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-light": "0px 4px 8px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0px 6px 12px rgba(0, 0, 0, 0.2)",
      },
      width: {
        "600": "600px",
      },
      fontSize:{
        '16':'1rem'
      },
      backgroundColor:{
        'navblue':'#183155',
        'gre':'#ebfaf8',
        'ble':'#edf3fc',
        'blehover':'#d1def7',
        'grehover':'#d4e8e6',
      },
      fontSize:{
        '3rem':'3rem'
      },
      textColor:{
        'darkgreen':'#183155',
        'lightgreen':'#1e4275',
        'icngreen':'#121314',
      }
    },
  },
  plugins: [
  ],
};