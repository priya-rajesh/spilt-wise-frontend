import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { isAuthenticated } = React.useContext(AuthContext);

  if (isAuthenticated === "true") {
    return <Navigate to="/expenses" />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    localStorage.setItem("isLoggedIn", true);
    navigate("/expenses");
  };

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={4}
        sx={{
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{ fontWeight: "bold", pb: 2 }}
        >
          Hi Welcome Back
        </Typography>
        <Typography component="p" variant="p">
          More effectively with optimized workflows.
        </Typography>
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: "500px", // adjust as needed
            borderRadius: "8px",
          }}
          src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/illustrations/illustration-dashboard.webp"
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            width: "30vw",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontWeight: "bold", pb: 2 }}
          >
            Sign in to your account
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ color: "grey", fontSize: "13px", display: "flex" }}
          >
            Don't have an account?
            <Link href="#" variant="body2" sx={{ color: "green" }}>
              Get Started
            </Link>
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
