/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      /* ブランドカラー */
      brand: {
        cyan: {
          DEFAULT: "var(--brand-cyan)",
          light: "var(--brand-cyan-light)",
          bright: "var(--brand-cyan-bright)",
        }
      },
      /* ベースカラー: ブラック */
      black: {
        DEFAULT: "var(--black-default)",
      },
      /* ベースカラー: グレー */
      gray: {
        dark: "var(--gray-dark)",
        DEFAULT: "var(--gray-default)",
        light: "var(--gray-light)",
      },
      /* ベースカラー: ブルー */
      blue: {
        deep: "var(--blue-deep)",
        dark: "var(--blue-dark)",
        DEFAULT: "var(--blue-default)",
        light: "var(--blue-light)",
        sky: "var(--blue-sky)",
      },
      /* ベースカラー: ホワイト */
      white: {
        DEFAULT: "var(--white-default)",
        cream: "var(--white-cream)",
        smoke: "var(--white-smoke)",
        reef: "var(--white-reef)",
      },
      /* 表現色 */
      expressive: {
        red: "var(--expressive-red)",
        orange: "var(--expressive-orange)",
        pink: "var(--expressive-pink)",
        green: "var(--expressive-green)",

      },
    },

  },
  plugins: [],
}
