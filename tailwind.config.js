/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
		  Poppins: ["Poppins", "sans-serif"],
		  Inter: ["Inter", "sans-serif"],
		  'times': ['Times New Roman', 'Times', 'serif'],
		  'Playwrite': ['Play'],
		},
		textColor: {
		  subheading: "#49706B",
		  heading: "#063848",
		},
		screens: {
		  vsm: "320px",
		},
      colors:{
			Darkblue:"#17212E",
			Yellow:"#F5CF6B",
			White:"#FFFFFF",
            bgcolor:"#FAF2BE",
		},
    backgroundImage:{
		Bootcampimg:'url("/public/Bootcampbg.jpg")',
		Workshopimg:'url("/public/Workshopbg.jpg")',
		Liveclassimg:'url("/public/Liveclassbg.jpg")',
		Webinarimg:'url("/public/Webinarbg.jpg")',
      },
    keyframes: {
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		},
		animation: {
		  'fade-in': 'fadeIn 0.5s ease-in forwards',
		},
	  },
	},
  plugins: [],
}

