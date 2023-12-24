/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        "./projects/**/*.{html,js,ts}",
        "./src/**/*.{html,js,ts}"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

