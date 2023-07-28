import * as React from "react";
// import Button from "./StyledComponents/Button";
import Typography from "./StyledComponents/Typography";
import ProductHeroLayout from "./StyledComponents/ProductHeroLayout";

const mangoImg = "https://elsumario.com/wp-content/uploads/2018/04/El-Sumario-En-epoca-de-mangos-conoce-algunas-curiosidades-de-esta-fruta.jpg";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${mangoImg})`,
        // backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={mangoImg}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Neque porro quisquam est qui dolorem ipsum quia dolor 
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        There is no one who loves pain itself, who seeks after it and wants to have it
      </Typography>
     {/*  <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/signup"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button> */}
      {/* <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography> */}
    </ProductHeroLayout>
  );
}