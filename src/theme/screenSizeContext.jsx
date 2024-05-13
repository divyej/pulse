import React, { createContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material";

const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const theme = useTheme();
  const [screenSize, setScreenSize] = useState("sm");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width >= theme.breakpoints.values.sm) {
        setScreenSize("sm");
      } else {
        setScreenSize("xs");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, [theme.breakpoints.values.sm]);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeContext;
