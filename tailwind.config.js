/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         'gradient' : 'linear-gradient(125deg, rgba(153, 188, 255, 0.15) 0%, rgba(153, 168, 255, 0.15) 11.98%, rgba(188, 155, 254, 0.15) 29.69%, rgba(209, 154, 254, 0.15) 66.94%, rgba(243, 153, 229, 0.15) 95.83%)',
         'custome-gradient':'linear-gradient(358deg,#000,#162866)',
         'custome-gradient2' : 'linear-gradient(359deg,#423582,#000)',  //black down
         'custome-gradient3' : 'linear-gradient(181deg,#000,#0a1f66)',
         'custome-gradient4' : 'linear-gradient(358deg,#000,#0a1f66)',
         'custome-gradient5' : 'linear-gradient(181deg,#251b4e,#000)',
         'custome-gradient8' : 'linear-gradient(181deg,#000, #251b4e)',
        'custome-gradient6' : 'linear-gradient(181deg,#000,#1b2b4e)',
        'custome-gradient7' : 'linear-gradient(359deg, rgb(0, 0, 0) 0%, rgb(66, 53, 130) 100%)' ,  //after 2
       
      },
   
    },
  },
  plugins: [],
}
/* linear-gradient(358deg,#000,#162866); */
/* background: linear-gradient(358deg,#000,#162866); */
/* background-color: #000; */
/* background: linear-gradient(359deg,#423582,#000); */
/* background: linear-gradient(181deg,#000,#0a1f66); */
/* background: linear-gradient(358deg,#000,#0a1f66); */
/* background: linear-gradient(181deg,#000,#251b4e); */
/* background: linear-gradient(358deg,#000,#251b4e); */
/* background: linear-gradient(181deg,#000,#1b2b4e); */