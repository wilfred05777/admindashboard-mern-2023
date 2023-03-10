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
