import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "./StyledComponents/Typography";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://www.freshplaza.es/remote/https/agfstorage.blob.core.windows.net/misc/FP_com/2023/07/19/RodeoMangoMexico1.jpg?preset=ArticleFullSmall",
    title: "Exportación",
    width: "40%",
  },
  {
    url: "https://www.donaguacato.com/wp-content/uploads/2023/05/Origenes-y-variedades-de-mango-en-Mexico.jpg",
    title: "Comercio",
    width: "20%",
  },
  {
    url: "https://i0.wp.com/panoramaagrario.com/wp-content/uploads/2015/12/2012_4_17_79HYbWKwiYmhheUEl27JA3-642x400.jpg?resize=642%2C400&ssl=1",
    title: "Empleo",
    width: "40%",
  },
  {
    url: "https://www.elsoldepuebla.com.mx/circulos/turismo/5xpajd-realiza-turismo-rural-en-la-sierra-norte-de-puebla-a-traves-de-estos-tres-lugares.jpg/ALTERNATES/LANDSCAPE_960/Realiza%20turismo%20rural%20en%20la%20Sierra%20Norte%20de%20Puebla,%20a%20trav%C3%A9s%20de%20estos%20tres%20lugares.jpg",
    title: "Turismo",
    width: "38%",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7348NpiTjT-BTPoFdnbI7STEbZt6ZrX-LUw&usqp=CAU",
    title: "Información",
    width: "38%",
  },
  {
    url: "https://st2.depositphotos.com/1562606/9810/i/600/depositphotos_98108176-stock-photo-mango-fruits-orchard.jpg",
    title: "Anuncios",
    width: "24%",
  },
];

console.log('IMAGEN', images[1].url)

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        La Ruta del Mango 
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}