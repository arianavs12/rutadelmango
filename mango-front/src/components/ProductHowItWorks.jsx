import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "./StyledComponents/Button";
import Typography from "./StyledComponents/Typography";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        backgroundImage: "url(./images/textura-jpg)",
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/images/textura.jpg"
          alt="textura"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            opacity: 0.5,
            width: "100%",
          }}
        />
        <Typography
          variant="h4"
          marked="center"
          component="h2"
          sx={{ mb: 14, opacity: 0.9 }}
        >
          Lorem ipsum 
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <PersonRoundedIcon
                  sx={{ opacity: 0.9, width: "50px", height: "auto" }}
                />
                <Typography variant="h5" align="center" sx={{ opacity: 0.9 }}>
                  Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <TravelExploreOutlinedIcon
                  sx={{ opacity: 0.9, width: "50px", height: "auto" }}
                />
                <Typography variant="h5" align="center" sx={{ opacity: 0.9 }}>
                  Nor again is there anyone who loves or pursues or desires
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <InventoryOutlinedIcon
                  sx={{ opacity: 0.9, width: "50px", height: "auto" }}
                />
                <Typography variant="h5" align="center" sx={{ opacity: 0.9 }}>
                  Nor again is there anyone who loves or pursues or desires
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/signup"
          sx={{ mt: 8 }}
        >
          Lorem ipsum
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;