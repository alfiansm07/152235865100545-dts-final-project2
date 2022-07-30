import { Alert, AlertTitle } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useAxios from "../hooks/useAxios";

const SearchPage = () => {
  let { query } = useParams();

  const [{ data, loading, error }, refetch] = useAxios(
    `/api/search?search=${query}`
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

  console.log("ini data dari search page", data);
  return <div>{query}</div>;
};

export default SearchPage;
