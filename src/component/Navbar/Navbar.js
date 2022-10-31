import React from "react";
import { Box } from "@mui/material";
import "./Style.css";
import Logo from "../../assests/image/Logo.png";

function Navbar() {
  return (
    <Box className="menu">
      <Box className="container-navbar">
        <Box className="container-menu">
          <Box>
            {/* Box logo */}
            <a href="/">
              <img src={Logo} alt="Logo Pictour" className="logo" />
            </a>
          </Box>
          <Box className="container-links">
            <nav>
              <a href="#operation" className="nav-link">
                Sobre
              </a>

              <a href="#questions" className="nav-link link-blog">
                FAQ
              </a>
              <a href="#form" className="nav-link">
                Contato
              </a>
            </nav>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
