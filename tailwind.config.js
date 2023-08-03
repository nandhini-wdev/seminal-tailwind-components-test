/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'moderat-bold': ['Moderat-Bold'],
      'moderat-light': ['Moderat-Light'],
      'moderat-medium': ['Moderat-Medium'],
      'sans': ['Moderat-Regular', 'Ariel', 'sans-serif'],
      'serif':  ['Moderat-Regular', 'Ariel', 'sans-serif'],
      'mono':  ['Moderat-Regular', 'Ariel', 'sans-serif'],
    },
    extend: {
      colors:{
        'background-primary' : '#FFFFFF',
        'background-secondary' : '#F6F6F6',
        'background-teritary' : '#EEEEEE',
        'background-inverse-primary' : '#000000',
        'background-inverse-secondary' : '#1F1F1F',
        'content-inverse-primary' : '#FFFFFF',
        'content-inverse-secondary' : '#CBCBCB',
        'content-inverse-teritary' : '#AFAFAF',
        'content-primary' : '#000000',
        'content-secondary' : '#545454',
        'content-teritary' : '#757575',
        'primary' : '#1A73E8',
        'blue-hover' : '#419FFF',
        'blue-pressed' : '#45B2FF',
        'blue-dark' : '#B5D5FF',
        'blue-light' : '#E8F2FF',
        'primitive-green' : '#06C167',
        'primitive-red' : '#E11900',
        'primitive-yellow' : '#FFC043',
        'primitive-orange' : '#FF6937',
        'primitive-purple' : '#7736FF',
        'primitive-peachy' : '#FF6161',
        'border-primary': '#E2E2E2'
      },
    },
  },
  plugins: [],
}

