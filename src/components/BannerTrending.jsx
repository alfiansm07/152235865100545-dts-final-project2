import useAxios from "../hooks/useAxios";

import React from "react";
import { Container } from "@mui/system";
import {
  Alert,
  AlertTitle,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Loading from "./Loading";

const BannerTrending = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    "api/detail/2021/01/28/balan-wonderworld-preview"
  );

  // const { author, desc, key, tag, thumb, time, title } = data.results;
  // console.log("test ", data.results);
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
  console.log(data.results);
  const { author, content, key, date, thumb, categories, title } = data.results;

  return (
    <Container maxWidth="xl" sx={{ paddingY: 5 }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        maxWidth="xl"
        // sx={{ paddingY: 5 }}
      >
        <Grid item xs={6}>
          <Card>
            <CardMedia
              component="img"
              sx={{ width: 750 }}
              image={thumb}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Box>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ color: "primary.main" }}>
                  trending{" "}
                </Typography>
              </Stack>
              <Stack mb={3}>
                <Typography variant="h4">{title}</Typography>
              </Stack>
              <Stack mb={3}>
                <Typography
                  variant="subtitle2"
                  color="initial"
                  sx={{ color: "primary.main" }}
                >
                  Kategori : {categories.map((kategori) => kategori + ", ")}
                </Typography>
              </Stack>
              <Stack mb={7}>
                <Typography variant="subtitle1" color="initial">
                  {content[1]}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Typography variant="subtitle2">by {author} </Typography>
                <Typography variant="subtitle2">by {date} </Typography>
              </Stack>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BannerTrending;
