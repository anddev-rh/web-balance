module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {   
    fontFamily: {
      'lato': ['Lato', 'sans-serif']
    },
    extend: {
      spacing: {
        '220px': '220px',
        '410px': '410px',
        '180px': '180px',
    },
    colors: {
      'gray-100': '#4E4E4E',
      'purple-100': '#7A72EE',
      'white-base': '#ffffff'
    },  
    borderRadius: {
      '10px' : '10px',
      '25px' : '25px'
    }, 
    boxShadow: {
      base: '0 4px 15px  0 rgba(0,0,0,0.25)'
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
