import { InputAdornment, Stack, TextField } from "@mui/material";

export default function TextFieldUsage() {
  return (
    <Stack spacing={3}>
      <Stack spacing={3} direction="row">
        <TextField label="Name" variant="outlined"></TextField>
        <TextField label="Name" variant="filled"></TextField>
        <TextField label="Name" variant="standard"></TextField>
      </Stack>
      <Stack spacing={3} direction="row">
        <TextField label="Name" size="small" color="secondary"></TextField>
      </Stack>
      <Stack spacing={3} direction="row">
        <TextField label="Name" required></TextField>
        <TextField type="password" label="Password" required></TextField>
        <TextField
          type="password"
          label="Password"
          required
          disabled
        ></TextField>
      </Stack>
      <Stack spacing={3} direction="row">
        <TextField
          label="Name"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        ></TextField>
        <TextField
          label="Name"
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            },
          }}
        ></TextField>
      </Stack>
      <Stack spacing={3} direction="row">
        <TextField label="Name" helperText="Incorrect" error></TextField>
      </Stack>
    </Stack>
  );
}
