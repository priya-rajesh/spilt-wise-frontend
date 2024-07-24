import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login";
import Expenses from "./components/pages/Expenses";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./components/Layout";
import Dashboard from "./components/pages/Dashboard";

const defaultTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable capitalization
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#b22acf", // Custom primary color
    },
    // secondary: {
    //   main: "#ff4081", // Custom secondary color
    // },
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Navigate to={"/expenses"} />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />} />
            <Route
              path="/expenses"
              element={
                <Layout>
                  <Expenses />
                </Layout>
              }
            />
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
