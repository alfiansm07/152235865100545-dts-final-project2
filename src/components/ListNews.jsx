import { Alert, AlertTitle, Box, Container } from "@mui/material";
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
  console.log("listnews", data);
  return (
    <Box>

            <CardNews data={data} />;)
  </Box>
};

export default ListNews;
