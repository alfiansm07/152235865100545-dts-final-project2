import {
  Alert,
  AlertTitle,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import useAxios from "../hooks/useAxios";
import CardNews from "./CardNews";
import CardNewsRight from "./CardNewsRight";
import CardNews2Right from "./CardNewsRight";
import Loading from "./Loading";

const ListNews = (props) => {
  const { url, kategori } = props;

  const [{ data, loading, error }, refetch] = useAxios({ url });

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

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" my={4}>
        {kategori}
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        // alignItems="flex-end"
        spacing={2}
      >
        <Grid item xs={9}>
          {" "}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {data.map((data) => (
              <CardNews key={data.key} data={data} />
            ))}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <CardNewsRight />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListNews;
