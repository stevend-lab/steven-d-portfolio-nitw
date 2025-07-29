module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",  // Tells Tailwind to scan these files for classes
    ],
    theme: {
        extend: {
            colors: {
                dark: '#0D0D0D',
                accent: '#FFD43B',
                panel: '#1A1A1A',
                codebg: '#2D2D2D',
            },
        },
    },
    plugins: [],
};