import React, { useState, useMemo } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  Tooltip,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  HowToReg as AttendanceIcon,
  AccessTime as ClockInIcon,
  Notifications as NotificationsIcon,
  Brightness4,
  Brightness7,
  TrendingUp as PerformanceIcon,
  AccountBalanceWallet as WalletIcon,
  ReceiptLong as PayslipIcon,
  EventNote as LeaveIcon,
  DateRange as HolidayIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Clock from "../dashboardPage/Clock";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import MyAttendance from "../dashboardPage/MyAttendance";
import MyPayslip from "../dashboardPage/MyPayslip";
import LeaveRequest from "../dashboardPage/LeaveRequest";
import Holidays from "../dashboardPage/Holidays";
import MyWallet from "../dashboardPage/MyWallet";
import MyPerformance from "../dashboardPage/MyPerformance";
import Profile from "../dashboardPage/Profile"; 
const expandedWidth = 250;
const collapsedWidth = 80;
const AdminDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false); 
  const navigate = useNavigate();
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: { mode: darkMode ? "dark" : "light" },
      }),
    [darkMode]
  );
  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon /> },
    { label: "My Attendance", icon: <AttendanceIcon /> },
    { label: "Clock-In", icon: <ClockInIcon /> },
    { label: "My Performance", icon: <PerformanceIcon /> },
    { label: "My Wallet", icon: <WalletIcon /> },
    { label: "My Payslip", icon: <PayslipIcon /> },
    { label: "Leave Requests", icon: <LeaveIcon /> },
    { label: "Holidays", icon: <HolidayIcon /> },
  ];
  const handleToggleSidebar = () => setCollapsed((prev) => !prev);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const handleMenuItemClick = (label) => {
    setSelectedMenuItem(label);
  };
  const handleProfileClick = () => {
    setShowProfile(true); 
  };
  const handleGoToDashboard = () => {
    setShowProfile(false); 
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            height: "90px",
            background: darkMode
              ? "#1f1f1f"
              : "linear-gradient(90deg, #5478dbff, #3b82f6, #06b6d4)",
            width: "100%",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar sx={{ marginTop: "10px",color: darkMode ? "white" : "black" }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Employee Portal
            </Typography>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <IconButton color="inherit" onClick={handleProfileClick}>
              <AccountCircleIcon />
            </IconButton>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        {!showProfile && (
          <Drawer
            variant="permanent"
            sx={{
              width: collapsed ? collapsedWidth : expandedWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: collapsed ? collapsedWidth : expandedWidth,
                marginTop: "90px",
                height: "calc(100vh - 90px)",
                background: darkMode ? "#1e1e1e" : "#fff",
                transition: "width 0.3s ease",
                overflowY: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
              },
            }}
          >
            <Box sx={{ p: 1, position: "relative" }}>
              <IconButton
                onClick={handleToggleSidebar}
                sx={{
                  position: "absolute",
                  top: 1,
                  right: collapsed ? 8 : 12,
                  zIndex: 10,
                  "&:hover": { background: "#c1cddaff" },
                  borderRadius: 2,
                  my: 1,
                }}
              >
                <MenuIcon />
              </IconButton>
              <List sx={{ mt: 5 }}>
                {menuItems.map((item) => (
                  <Tooltip
                    key={item.label}
                    title={collapsed ? item.label : ""}
                    placement="right"
                  >
                    <ListItemButton
                      selected={selectedMenuItem === item.label}
                      onClick={() => handleMenuItemClick(item.label)}
                      sx={{
                        justifyContent: collapsed ? "center" : "flex-start",
                        borderRadius: 2,
                        mb: 1,
                        px: collapsed ? 2 : 3,
                        position: "relative",
                        "&:hover": {
                          background:
                            "linear-gradient(to right, #1e3a8a, #3b82f6, #06b6d4)",
                          color: "#fff",
                          "& .MuiListItemIcon-root": { color: "#fff" },
                        },
                        "&.Mui-selected": {
                          background:
                            "linear-gradient(to right, #1e3a8a, #3b82f6, #06b6d4)",
                          color: "#fff",
                          "& .MuiListItemIcon-root": { color: "#fff" },
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: collapsed ? "auto" : "40px",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      {!collapsed && <ListItemText primary={item.label} />}
                    </ListItemButton>
                  </Tooltip>
                ))}
              </List>
            </Box>
          </Drawer>
        )}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: "90px",
            transition: "all 0.3s ease",
            minHeight: "calc(100vh - 90px)",
          }}
        >
          {showProfile ? (
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                background: darkMode ? "#1f1f1f" : "#fff", 
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                sx={{ mb: 2 }}
                onClick={handleGoToDashboard}
                className="flex text-start"
              >
                Go to Dashboard
              </Button>
              <Profile />
            </Box>
          ) : (
            <>
              {selectedMenuItem === "Dashboard" && <Home />}
              {selectedMenuItem === "Clock-In" && <Clock />}
              {selectedMenuItem === "My Attendance" && <MyAttendance />}
              {selectedMenuItem === "My Performance" && <MyPerformance />}
              {selectedMenuItem === "My Wallet" && <MyWallet />}
              {selectedMenuItem === "My Payslip" && <MyPayslip />}
              {selectedMenuItem === "Leave Requests" && <LeaveRequest />}
              {selectedMenuItem === "Holidays" && <Holidays />}
            </>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AdminDashboard;
