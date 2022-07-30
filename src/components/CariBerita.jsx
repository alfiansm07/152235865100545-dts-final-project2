import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const CariBerita = () => {
  return (
    <div>
      {" "}
      <Typography variant="h5" color="initial" my={3}>
        Cari Berita
      </Typography>
      <Container sx={{ background: "#F6DDDC" }} paddingY={3} minHeight="200px">
        <Box py={5}>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={1}
          >
            <Typography variant="subtitle2" color="initial">
              Masukan Kata Kunci Berita yang Ingin Dicari
            </Typography>

            <TextField
              id="outlined-textarea"
              placeholder="Masukan Kata Kunci"
            />
            <Button variant="contained" color="primary">
              Cari
            </Button>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default CariBerita;
