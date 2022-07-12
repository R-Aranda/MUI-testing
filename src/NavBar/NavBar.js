import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "Sign in", "Sign up"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#73a9c0",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Travel Website
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              component={Link}
              to="/home"
              key="home"
              sx={{ color: "#fff" }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/signin"
              key="home"
              sx={{ color: "#fff" }}
            >
              Sign in
            </Button>
            <Button
              component={Link}
              to="/register"
              key="home"
              sx={{ color: "#fff" }}
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav"></Box>
    </Box>
  );
}

export default DrawerAppBar;
