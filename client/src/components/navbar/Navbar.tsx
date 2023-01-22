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
import { setMode } from "state";
import profileImage from "../../assets/profile.jpeg";
import { useTheme } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [state, setState] = useState();

  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
