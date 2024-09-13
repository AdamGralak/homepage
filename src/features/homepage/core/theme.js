const colorNames = {
    blue: "rgba(3, 102, 214, 1)",
    black: "rgba(37, 37, 37, 1)",
    grey: "rgba(110, 126, 145, 1)",
    lightGrey: "rgba(251, 251, 254, 1)",
    white: "rgba(255, 255, 255, 1)",
    darkGrey: "rgba(54, 54, 54, 0.72)",
    lightBlack: "rgba(35, 35, 35, 1)",
    darkBlack: "rgba(0, 0, 0, 1)",
};

const breakpoints = {
    tablet: "768px",
    phone: "426px",
};

export const lightTheme = {
    breakpoints,
    colors: {
        blue: colorNames.blue,
        grey: colorNames.grey,
        icons: colorNames.darkBlack,
        lightGrey: colorNames.lightGrey,
        text: colorNames.black,
        textContent: colorNames.grey,
        background: colorNames.lightGrey,
        objectBackground: colorNames.white,
        shadow: colorNames.grey,
    },
};


export const darkTheme = {
    breakpoints,
    colors: {
        blue: colorNames.blue,
        grey: colorNames.grey,
        icons: colorNames.lightGrey,
        lightGrey: colorNames.lightGrey,
        text: colorNames.white,
        textContent: colorNames.lightGrey,
        background: colorNames.lightBlack,
        objectBackground: colorNames.darkGrey,    
        shadow: colorNames.darkBlack,
    },
};