/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs:"350px",
			sm: "480px",
			md: "770px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			backgroundImage: {
				"hero-img": "url('./src/assets/bg-image.jpg')",
			},
		},
	},
	plugins: [],
};
