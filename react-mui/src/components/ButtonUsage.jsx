import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonGroup from "@mui/material/ButtonGroup";
import { IconButton } from "@mui/material";

export default function ButtonUsage() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Button</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="text">Text</Button>
        <Button variant="contained" color="success">
          Button
        </Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <div style={{ margin: "20px" }}>
        <Button variant="text" size="small">
          Text
        </Button>
        <Button variant="contained" size="medium" startIcon={<SendIcon />}>
          Button
        </Button>
        <Button variant="outlined" size="large" endIcon={<SendIcon />}>
          Outlined
        </Button>
      </div>

      <div style={{ margin: "20px" }}>
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </div>

      <ButtonGroup color="error" variant="contained" size="small">
        <Button>One</Button>
        <Button color="error">Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
}
