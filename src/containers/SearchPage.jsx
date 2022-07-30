import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardNews from "../components/CardNews";
import Loading from "../components/Loading";
import useAxios from "../hooks/useAxios";

const SearchPage = () => {
  let { query } = useParams();
  const [url, setUrl] = useState(query);
  const urlRef = useRef();
  const [errorHandling, setErrorHandling] = useState();

  const navigate = useNavigate();
  const handleChange = (event) => {
    setUrl(event.target.value);
  };
  const [{ data, loading, error }, refetch] = useAxios(
    `/api/search?search=${url}`,
    { manual: !url }
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(urlRef.current.value);
    console.log("ini rul ", url);
    if (query === "") {
      setErrorHandling("masukan kata kunci,tidak boleh kosong.");
    }
  };

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

  // console.log("ini data dari search page", data);
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ background: "#F6DDDC", height: "40vh" }} my={3}>
          {" "}
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Typography variant="subtitle2" color="initial">
              Masukan Kata Kunci Berita yang Ingin Dicari
            </Typography>

            <TextField
              id="outlined-name"
              label="Name"
              inputRef={urlRef}
              placeholder="Masukan Kata Kunci"
              sx={{ display: "flex ", marginY: "20px" }}
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Cari
            </Button>
            {error && (
              <Alert variant="outlined" severity="error">
                {error}
              </Alert>
            )}
          </Box>
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {data.map((item) => {
            return <CardNews data={item} />;
          })}
        </Grid>
      </Container>
    </>
  );
};

export default SearchPage;
