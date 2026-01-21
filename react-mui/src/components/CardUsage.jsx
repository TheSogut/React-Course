import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import TypographyUsage from "./TypographyUsage";

export default function CardUsage() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="160"
          image="https://picsum.photos/500"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            Lorem, ipsum.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            numquam repellat mollitia, laborum repudiandae iste quos, culpa
            velit et qui possimus voluptatem! Ratione voluptate inventore error
            impedit, expedita ut. Nobis.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
