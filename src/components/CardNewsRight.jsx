import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAxios from "../hooks/useAxios";
import Loading from "./Loading";

const CardNewsRight = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    "/api/tech/recommend?page=1"
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Container
        sx={{
          paddingY: 5,
        }}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
      </Container>
    );
  }
  const { author, content, key, date, thumb, categories, title } = data[0];

  return (
    <>
      <Typography variant="h5" color="initial" mt={-4}>
        For You
      </Typography>
      <Card
        sx={{
          maxWidth: "370px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          mb: 2,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="210px"
            image={thumb}
            alt={key}
          ></CardMedia>
          <CardContent>
            <Typography variant="h6" color="initial" mb={2}>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
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
    </>
  );
};

export default CardNewsRight;
