import { Box } from "@mui/material";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useState } from "react";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const [isOpened, setIsOpened] = useState(true);
  return (
    <Box sx={{ display: "flex" }}>
      <Header setIsOpened={setIsOpened} />
      <Sidebar open={isOpened} />

      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        {children}
      </Box>
      <Footer open={isOpened} />
    </Box>
  );
};
export default Layout;
