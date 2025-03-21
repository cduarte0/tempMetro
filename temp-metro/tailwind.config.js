/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            'gradiente-personalizado': 'linear-gradient(to right, #C1A06E 90%, #0D2237 100%)',
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'purple': '#3f3cbb',
          'midnight': '#121063',
          'metal': '#565584',
          'tahiti': '#3ab7bf',
          'silver': '#ecebff',
          'bubble-gum': '#ff77e9',
          'cinzento': '#A0AEC0',
          'azul-primeiro': '#06378E',
          'azul-segundo': '#558ED5',
          'azul-terceiro': '#203B5C',
          'azul-quarto': '#0d2237',
          'cinza-claro': '#F2F6FF',
          'vermelho': '#FF0000',
          'branco': '#ffffff',
          'preto': '#000', 
          'azul-gradiente1': '#0EB2E5',
          'azul-gradiente2': '#0f6dd8',
          'azul-gradiente3': '#202F7C',
          'azul-gradiente3': '#30c0f0',
          'az': '#87b7ee',
          'laranja1': '#FFDF69',
          'laranja2': '#FFA033',
          'azul4': '#68A4ED',
          'azul5': '#1F54B4',
          'castanho': '#505254',
          'gold': '#C1A06E',
          'cinzento2': '#d9d9d9',
          'verde-escuro': '#284035',
          'verde-claro': '#365949',
          'castanho-executivo': '#545454', 
          'cinza-executivo': '#d5cfca',
          'cinza-morno' : '#616161',
  
        },
        spacing: {
          a4width: "210mm", // Largura padrão A4
          a4height: "297mm", // Altura padrão A4
        },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }