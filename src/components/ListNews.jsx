import { Alert, AlertTitle, Box, Container, Typography } from "@mui/material";
import React from "react";
import useAxios from "../hooks/useAxios";
import CardNews from "./CardNews";
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
    <Box>
      <Typography>{kategori}</Typography>
      <Typography>{data[0].title}</Typography>
      {data.map((data) => (
        <CardNews key={data.key} data={data} />
      ))}
    </Box>
  );
};

export default ListNews;
