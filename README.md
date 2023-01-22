## ADMIN Dashboard MERN

### DESCRIPTION

    - USES MUI CSS Framework and little bit of tailwindcss extension for vscode
    - MERN

<hr>

#### [tutsource-EdRoh](https://www.youtube.com/watch?v=0cPCMIuDk2I)

#### [gitsrccode](https://github.com/ed-roh/fullstack-admin)

<hr>

## PART A.) SERVER/BACKEND SETUP

```js
ROOT
  |──client
  |    |──node_modules
  |    |──public
  |    |──src
  |    |    └── components
  |    |    └── components
  |──server <---we are here
  |    ├── data
  |    │    └──
  |    ├── controllers
  |    │    └── clients.js
  |    │    └── general.js
  |    │    └── management.js
  |    │    └── sales.js
  |    ├── models
  |    │    └── todo.js
  |    ├── node_modules
  |    ├── routes
  |    │    └── clients.js
  |    │    └── general.js
  |    │    └── management.js
  |    │    └── sales.js
  |    ├── .env
  |    ├── server.js
  ├── package-lock.json
  └── package.json
```

```js
// /server/ folder
npm install express body-parser cors dotenv helmet morgan mongoose nodemon
```

```js
//server/index.js
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

/* importing Routes */
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/** ROUTES **/
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did nto connect`));
```

```json
// /server/package.json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module", <--- allows us to import modules
}
```

```
<!-- .env -->
MONGO_URL = 'mongodb+srv://wilfred:wilfredadmin@wilfredcluster.rsfdy.mongodb.net/mern-admindashboard-app?retryWrites=true&w=majority'
PORT = 5001

```

```js
// package.json

 "start": "node index.js",
  "dev": "nodemon index.js",

/** NOTE==about node and nodemon ========**/
// the reason we don't use nodemon on start is because we are going to deploy our app in live server we USE node that is why on start it uses NODE

```

```js
// /server folder
// checking if the node server has no error
npm run dev
```

<hr>

###### /_ MONGOOSE SETUP _/

const PORT = process.env.PORT

<hr>

## PART B.) CLIENT/FRONT-END SETUP

```js
ROOT
  |──client <---we are here
  |    |──node_modules
  |    |──public
  |    |──src
  |    |    └── components
  |    |    └── components
  |──server
  |    ├── data
  |    │    └──
  |    ├── controllers
  |    │    └── clients.js
  |    │    └── general.js
  |    │    └── management.js
  |    │    └── sales.js
  |    ├── models
  |    │    └── todo.js
  |    ├── node_modules
  |    ├── routes
  |    │    └── clients.js
  |    │    └── general.js
  |    │    └── management.js
  |    │    └── sales.js
  |    ├── .env
  |    ├── server.js
  ├── package-lock.json
  └── package.json
```

```js
// root folder and type this command in the terminal
npm create vite@latest
cd client
npm install

```

```js
// 0:22:42
// install the following package in client
npm i react-redux @reduxjs/toolkit react-datepicker react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid @nivo/core @nivo/bar @nivo/geo @nivo/pie

```

```json
// client/jsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

###### ADDING themes

```tsx
// client/src/theme.js
// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000" // manually adjusted
  },
  primary: {
    // blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45", // manually adjusted
    700: "#141937",
    800: "#0d1025",
    900: "#070812"
  },
  secondary: {
    // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14"
  }
};

// function that reverses the color palette
function reverseTokens(tokensDark: any) {
  const reversedTokens: any = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys({ val });
    const values = Object.values({ val });
    const length = keys.length;
    const reversedObj: any = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode: any) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400]
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300]
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500]
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500]
            }
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100]
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700]
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500]
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50]
            }
          })
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14
      }
    }
  };
};
```

###### Setup data

```js
// backend /server/data/index.js

//  copy content from this
[repo](https://github.com/ed-roh/fullstack-admin/blob/master/server/data/index.js)

```

###### setup google font "Inter"

```js
// client/src/index.scss
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

html,
body,
#root,
.app {
  height: 100%;
  width: 100%;
  font-family: "Inter", sans-serif;
}

```

<hr>

##### CONFIGURE REACT REDUX on the PROJECT

<!-- 0:33:00 t0 0:36:49 -->

- steps:
  - create state in client/src/state/index.tsx
  - the plugin it the entire app through index.js or main.tsx

```tsx
/// client/src/state/index.tsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark"
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    }
  }
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
```

```tsx
/// client/src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./state";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    global: globalReducer
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

- update the app.tsx

```tsx
/// client/src/app.tsx
import { useMemo } from "react";
import "./App.scss";

import { CssBaseline, ThemeProvider } from "@mui/material";
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
```

# !!Encountered MUI CssBaseline!!

<hr>

- Docs: [MUIandTailWindCSS](https://mui.com/material-ui/guides/interoperability/#setup)

- ## [vite-react](https://tailwindcss.com/docs/guides/vite)
  ```
  npm install -D tailwindcss postcss autoprefixer
  ```

<hr>

# fixing MUI CssBaseline

```tsx
import { useMemo } from "react";
import "./App.scss";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles"; /// naa ra di mali diri potek
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";

const App = () => {
  const mode = useSelector((state: any) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
};

export default App;
```

<hr>

### Implementing Routing - 0:43:50 BrowserRouter and Routes Implementation

```tsx
/// 0:43:30 - 0:46:13
/// client/src/app.tsx

import { useMemo } from "react";
import "./App.scss";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./screen/dashboard/index";
import Layout from "./screen/layout/index";

const App = () => {
  const mode = useSelector((state: any) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
```

<hr>

##### CREATING COMPONENT BASE MANNER STYLE IN MUI

```tsx
//// client/src/components/flexBetween/FlexBetween.tsx
import { styled } from "@mui/material";
import { Box } from "@mui/system";

// style component in MUI system in a component manner

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});
```

- usage

```tsx
/// 0:50:31 -
/// client/src/screen/layout/Layout.tsx

import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";

const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
```

- Creating the navbar icon menu, search,
- Dark and light mode icon
- Settings icon

```tsx
/* 1:01:40 */
/* client/src/components/navbar/Navbar.tsx */
import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined
} from "@mui/icons-material";
import FlexBetween from "../flexBetween/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../../state/index";
import profileImage from "../../assets/profile.jpeg";
import { IconButton, useTheme, InputBase } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [state, setState] = useState();

  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE NAVBAR */}
        <FlexBetween gap="0.5rem">
          <IconButton onClick={() => console.log("Open/Close sidebar")}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search....">
              <Search />
            </InputBase>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE NAVBAR */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
```
