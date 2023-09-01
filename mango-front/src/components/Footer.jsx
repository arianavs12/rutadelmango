import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "./StyledComponents/Typography";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mr: 1,
};

export default function AppFooter() {
  return (
    <Typography component="footer" sx={{ display: "flex", bgcolor: "white" }}>
      <Container sx={{ my: 7, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid item sx={{ display: "flex" }}>     
            </Grid>
            <br />
            <Typography>
              Ing. Javier Vásquez Echeverria R.
              <br />
              Tel. 994 721 8082
              <br />
              javiervaras61@hotmail.com
            </Typography>
            <br />
            <CopyrightRoundedIcon sx={{ height: "15px" }} />
            La Ruta del Mango
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}