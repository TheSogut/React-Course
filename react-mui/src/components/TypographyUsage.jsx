import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function TypographyUsage() {
  return (
    <Box sx={{ width: "100%", maxWidth: 800 }}>
      <Typography variant="h1" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h2" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h3" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="subtitle1" gutterBottom noWrap>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        sequi.
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        sequi.
      </Typography>
      <Typography variant="body1" gutterBottom color="error">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam nam
        hic a? Adipisci voluptas provident delectus, error expedita accusantium
        dolorum magni mollitia quae iusto dolorem ullam nulla ad quaerat.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam nam
        hic a? Adipisci voluptas provident delectus, error expedita accusantium
        dolorum magni mollitia quae iusto dolorem ullam nulla ad quaerat.
      </Typography>
      <Typography variant="button" gutterBottom>
        Button Text
      </Typography>
    </Box>
  );
}
