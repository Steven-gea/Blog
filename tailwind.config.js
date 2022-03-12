module.exports = {
  // mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
       's': '100px',
       'ts': '130px',
       '2ts': '260px',
       '3ts': '390px',

       'xs': '320px',
       'sm': '384px',
       'md': '448px',
       'lg': '512px',
       'xl': '576px',
       '2xl': '672px',
       '3xl': '768px',
       '4xl': '896px',
       '5xl': '1024px',
      },
      lineHeight: {
        '2': '.1rem',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
