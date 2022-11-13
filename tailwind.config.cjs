const defaultTheme = require('tailwindcss/defaultTheme')
const withAnimation = require('animated-tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = withAnimation({
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1024px'
        },
        extend: {
            fontFamily: {
                sans: ['Eloquia', ...defaultTheme.fontFamily.sans],
                sub: ['SourceSansPro-Regular']
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '0.8rem',
                    sm: '1rem'
                }
            },
            colors: {
                magenta: {
                    50: '#ff63d0',
                    100: '#ff59c6',
                    200: '#ff4fbc',
                    300: '#ff45b2',
                    400: '#fe3ba8',
                    500: '#f4319e',
                    600: '#ea2794',
                    700: '#e01d8a',
                    800: '#d61380',
                    900: '#cc0976'
                },
                fdark: {
                    100: '#0d0c0d' 
                },
                m2: {
                    100: '#d03a8c',
                    200: '#ff28a2'
                }
            },
            animation: {
                blink: 'blink 0.5s step-end infinite alternate',
                "gradient-x":'gradient-x 5s ease infinite',
                "gradient-y":'gradient-y 5s ease infinite',
                "gradient-xy":'gradient-xy 5s ease infinite'
            },
            keyframes: {
                blink: {
                    '100%': {
                        opacity: '100%'
                    },
                    '50%': {
                        opacity: '0'
                    }
                },
                'gradient-y': {
                    '0%, 100%': {
                        'background-size':'400% 400%',
                        'background-position': 'center top'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'center center'
                    }
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-size':'200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'right center'
                    }
                },
                'gradient-xy': {
                    '0%, 100%': {
                        'background-size':'400% 400%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'right center'
            }
                }}
        }
    },
    plugins: []
})
