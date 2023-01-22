import { useMemo } from "react";
import "./App.scss";

import { ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from "@mui/system";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state: any) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
