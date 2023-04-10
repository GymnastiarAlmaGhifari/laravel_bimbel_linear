const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                "Primary-10": "#192e2c",
                "Primary-20": "#325d58",
                "Primary-30": "#4c8b85",
                "Primary-40": "#65bab1",
                "Primary-50": "#7fe9de",
                "Primary-60": "#8bebe1",
                "Primary-70": "#a5efe7",
                "Primary-80": "#b2f1eb",
                "Primary-90": "#cbf6f1",
                "Primary-95": "#e5faf8",
                "Primary-99": "#f2fcfb",
                "Error-10": "#4c1616",
                "Error-20": "#7f2525",
                "Error-30": "#b23333",
                "Error-40": "#e54242",
                "Error-50": "#ff4a4a",
                "Error-60": "#ff5c5c",
                "Error-70": "#ff6e6e",
                "Error-80": "#ff9292",
                "Error-90": "#ffb6b6",
                "Error-95": "#ffdada",
                "Error-99": "#ffecec",
                "Neutral-0": "#000000",
                "Neutral-10": "#1c1b1f",
                "Neutral-20": "#313033",
                "Neutral-30": "#484649",
                "Neutral-40": "#605d62",
                "Neutral-50": "#787579",
                "Neutral-60": "#939094",
                "Neutral-70": "#aeaaae",
                "Neutral-80": "#c9c5ca",
                "Neutral-90": "#e6e1e5",
                "Neutral-95": "#f3f3f3",
                "Neutral-99": "#fffbfe",
                "Neutral-100": "#ffffff",
                "Secondary-50": "#ffb740",
                "Secondary-20": "#664919",
                "Secondary-60": "#ffc566",
                "Secondary-70": "#ffd38c",
                "Secondary-80": "#ffe2b2",
                "Secondary-90": "#ffe9c5",
                "Secondary-95": "#fff0d8",
                "Secondary-99": "#fff7eb",
                "Secondary-10": "#33240c",
                "Secondary-40": "#cc9233",
                "Secondary-30": "#996d26",
                "Tertiary-10": "#0d192b",
                "Tertiary-50": "#417dd9",
                "Tertiary-40": "#3464ad",
                "Tertiary-30": "#274b82",
                "Tertiary-20": "#1a3256",
                "Tertiary-60": "#6697e0",
                "Tertiary-70": "#8db1e8",
                "Tertiary-80": "#b3cbef",
                "Tertiary-90": "#c6d8f3",
                "Tertiary-95": "#d9e5f7",
                "Tertiary-99": "#ecf2fb",
            },
            fontSize: {
                xs: "0.75rem",
                sm: "0.875rem",
                base: "1rem",
                lg: "1.375rem",
                xl: "1.5rem",
                "2xl": "1.75rem",
                "3xl": "2rem",
                "4xl": "2.25rem",
                "5xl": "2.8125rem",
                "6xl": "3.5625rem",
            },
            fontFamily: {
                mulish: "Mulish",
            },
            boxShadow: {
                "Elevation Light 1":
                    "0px 1px 3px 1px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
                "Elevation Light 2":
                    "0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
                "Elevation Light 3":
                    "0px 1px 3px 0px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15)",
                "Elevation Light 4":
                    "0px 2px 3px 0px rgba(0,0,0,0.3), 0px 6px 10px 4px rgba(0,0,0,0.15)",
                "Elevation Light 5":
                    "0px 4px 4px 0px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)",
                "Elevation Dark 1":
                    "0px 1px 2px 0px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)",
                "Elevation Dark 2":
                    "0px 1px 2px 0px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)",
                "Elevation Dark 3":
                    "0px 1px 3px 0px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15)",
                "Elevation Dark 4":
                    "0px 2px 3px 0px rgba(0,0,0,0.3), 0px 6px 10px 4px rgba(0,0,0,0.15)",
                "Elevation Dark 5":
                    "0px 4px 4px 0px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)",
                "Elevation Light Upside Down 1":
                    "0px -1px 3px 1px rgba(0,0,0,0.15), 0px -1px 2px 0px rgba(0,0,0,0.3)",
                "Elevation Light Upside Down 2":
                    "0px -2px 6px 2px rgba(0,0,0,0.15), 0px -1px 2px 0px rgba(0,0,0,0.3)",
                "Elevation Light Upside Down 3":
                    "0px -1px 3px 0px rgba(0,0,0,0.3), 0px -4px 8px 3px rgba(0,0,0,0.15)",
                "Elevation Light Upside Down 4":
                    "0px -2px 3px 0px rgba(0,0,0,0.3), 0px -6px 10px 4px rgba(0,0,0,0.15)",
                "Elevation Light Upside Down 5":
                    "0px -4px 4px 0px rgba(0,0,0,0.3), 0px -8px 12px 6px rgba(0,0,0,0.15)",
                "Elevation Dark Upside Down 1":
                    "0px -1px 2px 0px rgba(0,0,0,0.3), 0px -1px 3px 1px rgba(0,0,0,0.15)",
                "Elevation Dark Upside Down 2":
                    "0px -1px 2px 0px rgba(0,0,0,0.3), 0px -2px 6px 2px rgba(0,0,0,0.15)",
                "Elevation Dark Upside Down 3":
                    "0px -1px 3px 0px rgba(0,0,0,0.3), 0px -4px 8px 3px rgba(0,0,0,0.15)",
                "Elevation Dark Upside Down 4":
                    "0px -2px 3px 0px rgba(0,0,0,0.3), 0px -6px 10px 4px rgba(0,0,0,0.15)",
                "Elevation Dark Upside Down 5":
                    "0px -4px 4px 0px rgba(0,0,0,0.3), 0px -8px 12px 6px rgba(0,0,0,0.15)",
            },
            borderRadius: {
                none: "0",
                xs: "0.0625rem",
                sm: "0.3125rem",
                default: "0.5rem",
                lg: "0.625rem",
                xl: "1rem",
                "2xl": "1.125rem",
                "3xl": "1.25rem",
                "4xl": "1.375rem",
                "5xl": "1.5625rem",
                "6xl": "1.75rem",
                "7xl": "1.875rem",
                "8xl": "2.5rem",
                "9xl": "3.75rem",
                full: "9999px",
            },
            fontFamily: {
                // make mulish and default use sans-serif
                mulish: "Mulish, sans-serif",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
