import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const NEUTRAL = {
  0: "#FFFFFF",
  10: "#1D1B20",
  20: "#322F35",
  30: "#48464C",
  40: "#605D64",
  50: "#79767D",
  60: "#938F96",
  70: "#AEA9B1",
  80: "#CAC5CD",
  90: "#E6E0E9",
  100: "#FFFFFF",
};

const NEUTRAL_VAR = {
  0: "#FFFFFF",
  10: "#1D1A22",
  20: "#322F37",
  30: "#49454F",
  40: "#605D66",
  50: "#79767D",
  60: "#79747E",
  70: "#938F99",
  80: "#CAC4D0",
  90: "#E7E0EC",
  100: "#FFFFFF",
};

const PRIMARY_DARK = {
  0: "#000000",
  10: "#21005D",
  20: "#381E72",
  30: "#4F378B",
  40: "#6750A4",
  50: "#7F67BE",
  60: "#9A82DB",
  70: "#B69DF8",
  80: "#D0BCFF",
  90: "#EADDFF",
  100: "#FFFFFF",
};

const SECONDARY_DARK = {
  0: "#000000",
  10: "#1D192B",
  20: "#332D41",
  30: "#4A4458",
  40: "#625B71",
  50: "#7A7289",
  60: "#958DA5",
  70: "#B0A7C0",
  80: "#CCC2DC",
  90: "#E8DEF8",
  100: "#FFFFFA",
};

const TERTIARY_DARK = {
  0: "#000000",
  10: "#31111D",
  20: "#492532",
  30: "#633B48",
  40: "#7D5260",
  50: "#986977",
  60: "#B58392",
  70: "#D29DAC",
  80: "#EFB8C8",
  90: "#FFD8E4",
  100: "#FFFFFF",
};

const ERROR = {
  0: "#000000",
  10: "#FFD6D6",
  20: "#601410 ",
  30: "#8C1D18",
  40: "#B3261E",
  50: "#DC362E",
  60: "#E46962",
  70: "#EC928E",
  80: "#F2B8B5",
  90: "#F9DEDC",
  100: "#ffffff",
};

const LIGHT = {
  primary: {
    main: "#DA0063",
    container: PRIMARY_DARK[90],
    containerText: PRIMARY_DARK[10],
    fixed: PRIMARY_DARK[90],
    fixedDim: PRIMARY_DARK[80],
    fixedText: PRIMARY_DARK[10],
    fixedTextDim: PRIMARY_DARK[30],
    contrastText: "#fff",
  },
  secondary: {
    main: SECONDARY_DARK[40],
    container: SECONDARY_DARK[90],
    containerText: SECONDARY_DARK[10],
    fixed: SECONDARY_DARK[90],
    fixedDim: SECONDARY_DARK[80],
    fixedText: SECONDARY_DARK[10],
    fixedTextDim: SECONDARY_DARK[30],
    contrastText: "#fff",
  },
  tertiary: {
    main: TERTIARY_DARK[40],
    container: TERTIARY_DARK[90],
    containerText: TERTIARY_DARK[10],
    fixed: TERTIARY_DARK[90],
    fixedDim: TERTIARY_DARK[80],
    fixedText: TERTIARY_DARK[10],
    fixedTextDim: TERTIARY_DARK[30],
    contrastText: "#fff",
  },
  error: {
    main: ERROR[40],
    container: ERROR[90],
    containerText: ERROR[10],
    contrastText: "#fff",
  },
  surface: {
    main: "#DED8E1",
    paper: "#F8F8F8",
    surface: "#EAEAEA",
    container_low: "#F7F2FA",
    container: "#F3EDF7",
    container_high: "#ECE6F0",
    containerHighest: NEUTRAL[90],
    inverseSurface: NEUTRAL[10],
    surfaceText: NEUTRAL[90],
    surfaceTextDim: NEUTRAL_VAR[30],
    outline: NEUTRAL_VAR[50],
    outline_var: NEUTRAL_VAR[80],
  },
};

const DARK = {
  primary: {
    main: PRIMARY_DARK[80],
    container: PRIMARY_DARK[30],
    containerText: PRIMARY_DARK[90],
    contrastText: PRIMARY_DARK[20],
    fixed: PRIMARY_DARK[90],
    fixedDim: PRIMARY_DARK[80],
    fixedText: PRIMARY_DARK[10],
    fixedTextDim: PRIMARY_DARK[30],
  },
  secondary: {
    main: SECONDARY_DARK[80],
    container: SECONDARY_DARK[30],
    containerText: SECONDARY_DARK[90],
    contrastText: SECONDARY_DARK[20],
    fixed: SECONDARY_DARK[90],
    fixedDim: SECONDARY_DARK[80],
    fixedText: SECONDARY_DARK[10],
    fixedTextDim: SECONDARY_DARK[30],
  },
  tertiary: {
    main: TERTIARY_DARK[80],
    container: TERTIARY_DARK[30],
    containerText: TERTIARY_DARK[90],
    contrastText: TERTIARY_DARK[20],
    fixed: TERTIARY_DARK[90],
    fixedDim: TERTIARY_DARK[80],
    fixedText: TERTIARY_DARK[10],
    fixedTextDim: TERTIARY_DARK[30],
  },
  error: {
    main: ERROR[80],
    container: ERROR[30],
    containerText: ERROR[90],
    contrastText: ERROR[20],
  },
  surface: {
    main: "#141218",
    surface: "#141218",
    container_low: "#3B383E",
    container: "#F3EDF7",
    container_high: "#2B2930",
    containerHighest: "#36343B",
    inverseSurface: NEUTRAL[90],
    surfaceText: NEUTRAL[20],
    surfaceTextDim: NEUTRAL_VAR[30],
    outline: NEUTRAL_VAR[80],
    outline_var: NEUTRAL_VAR[30],
  },
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const lightPalette = {
  common: { black: "#000", white: "#fff" },
  primary: LIGHT.primary,
  secondary: LIGHT.secondary,
  tertiary: LIGHT.tertiary,
  error: LIGHT.error,
  surface: LIGHT.surface,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  grey: GREY,
  psu_primary: { main: "#14406E", contrastText: "#fff" },
  psu_secondary: { main: "#265895", contrastText: "#fff" },
  psu_tertiary: { main: "#658CBB", contrastText: "#fff" },
  psu_grey300: {
    main: "#F4F6F8",
    contrastText: "#000",
  },
  psu_grey400: {
    main: "#98A2B3",
    contrastText: "#fff",
  },
  psu_grey500: {
    main: "#667085",
    contrastText: "#fff",
  },
  psu_grey600: {
    main: "#475467",
    contrastText: "#fff",
  },
  psu_grey700: {
    main: "#344054",
    contrastText: "#fff",
  },
  psu_grey900: {
    main: "#101828",
    contrastText: "#fff",
  },
  psu_primary100: {
    main: "#E3F1FF",
    contrastText: "#fff",
  },
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const darkPalette = {
  common: { black: "#000", white: "#fff" },
  primary: DARK.primary,
  secondary: DARK.secondary,
  tertiary: DARK.tertiary,
  error: DARK.error,
  surface: DARK.surface,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  grey: GREY,
  psu_primary: { main: "#14406E", contrastText: "#fff" },
  psu_secondary: { main: "#265895", contrastText: "#fff" },
  psu_tertiary: { main: "#658CBB", contrastText: "#fff" },
  psu_grey300: {
    main: "#F4F6F8",
    contrastText: "#000",
  },
  psu_grey400: {
    main: "#98A2B3",
    contrastText: "#fff",
  },
  psu_grey500: {
    main: "#667085",
    contrastText: "#fff",
  },
  psu_grey600: {
    main: "#475467",
    contrastText: "#fff",
  },
  psu_grey700: {
    main: "#344054",
    contrastText: "#fff",
  },
  psu_grey900: {
    main: "#101828",
    contrastText: "#fff",
  },
  psu_primary100: {
    main: "#E3F1FF",
    contrastText: "#fff",
  },
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const getPalette = (isDarkTheme) => {
  return isDarkTheme ? darkPalette : lightPalette;
};

export default getPalette;
