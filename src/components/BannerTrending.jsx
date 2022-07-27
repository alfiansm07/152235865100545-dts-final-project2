import useAxios from "../hooks/useAxios";

import React from "react";
import { Container } from "@mui/system";
import { Alert, AlertTitle } from "@mui/material";

const BannerTrending = () => {
  const [{ data, loading, error }, refetch] = useAxios("/api/games?page=1");
  console.log(data);
  const { author, desc, key, tag, thumb, time, title } = data[0];
  console.log("test ", title);
  if (loading) {
    return <></>;
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

  return <></>;
};

export default BannerTrending;
