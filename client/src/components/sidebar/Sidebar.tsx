import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  PointOfSaleOutlined
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

import FlexBetween from "../flexBetween/FlexBetween";
import profileImage from "../../assets/profile.jpeg";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />
  },
  {
    text: "Client Facing",
    icon: null
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />
  },
  {
    text: "Geography",
    icon: <PublicOutlined />
  },
  {
    text: "Sales",
    icon: null
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />
  },
  {
    text: "Daily",
    icon: <TodayOutlined />
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />
  },
  {
    text: "Management",
    icon: null
  },
  {
    text: "Daily",
    icon: <TodayOutlined />
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />
  }
];

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile
}: {
  drawerWidth: any;
  isSidebarOpen: any;
  setIsSidebarOpen: any;
  isNonMobile: any;
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme: any = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            /// customize a particular class in MUI
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth
            }
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2.rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map({ text, icon}) => {
                if(!icon) {
                  return(
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem"}}>
                      {text}
                    </Typography>
                  )
                }
                const lcText = text.toLowerCase();

                return( 
                  <ListItem key={text} disablePadding>
                    <ListItemButton onClick={() => { navigate(`/${lcText}`); setActive(lcText)}}>

                    </ListItemButton>
                  </ListItem>
                )
               }}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
