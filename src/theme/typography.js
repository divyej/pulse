// ----------------------------------------------------------------------

export function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
    return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
    return {
        '@media (min-width:600px)': {
            fontSize: pxToRem(sm),
        },
        '@media (min-width:900px)': {
            fontSize: pxToRem(md),
        },
        '@media (min-width:1200px)': {
            fontSize: pxToRem(lg),
        },
    };
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = '"Segoe UI", sans-serif'; // Google Font
//const FONT_SECONDARY = 'Inter, sans-serif'; // Local Font

const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,

    title: {
        fontWeight: 800,
        lineHeight: 1.5,
        fontSize: pxToRem(64),
        ...responsiveFontSizes({ sm: 36, md: 36, lg: 36 }),
    },

    h1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(42),
        ...responsiveFontSizes({ sm: 36, md: 36, lg: 36 }),
    },

    h2: {
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: pxToRem(30),
        color: 'error',
        ...responsiveFontSizes({ sm: 30, md: 30, lg: 30 }),
    },

    h3: {
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({ sm: 24, md: 24, lg: 24 }),
    },

    h4: {
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({ sm: 18, md: 20, lg: 20 }),
    },

    h5: {
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 20, md: 20, lg: 20 }),
    },

    h6: {
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: pxToRem(14),
        ...responsiveFontSizes({ sm: 14, md: 14, lg: 14 }),
    },


    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16),
        ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 }),
    },

    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
    },

    subtitle3: {
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: pxToRem(16),
        ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 }),
    },

    subtitle4: {
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: pxToRem(14),
    },

    subtitle5: {
        fontWeight: 500,
        lineHeight: 22 / 14,
        fontSize: pxToRem(12),
    },

    subtitle6: {
        fontWeight: 400,
        lineHeight: 22 / 14,
        fontSize: pxToRem(16),
    },

    subtitle7: {
        fontWeight: 400,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
    },

    subtitle8: {
        fontWeight: 400,
        lineHeight: 22 / 14,
        fontSize: pxToRem(12),
    },

    subtitle9: {
        fontWeight: 300,
        lineHeight: 1.5,
        fontSize: pxToRem(16),
        ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 }),
    },


    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16),
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12),
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: 'uppercase',
    },
    button: {
        fontWeight: 400,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: 'capitalize',
    },
};

export default typography;
