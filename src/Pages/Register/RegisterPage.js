import React from "react";
// import "./RegisterPage.scss";
import RegisterForm from "./RegisterForm";
import RegisterWindow from "./RegisterWindow";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const RegisterPage = () => {
  const [spacing, setSpacing] = React.useState(2);
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Grid container justifyContent="center" spacing={spacing}>
            <div className="register-window">
              <RegisterWindow />
            </div>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <div className="register-wrapper">
            <div className="register-form">
              <RegisterForm />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterPage;
