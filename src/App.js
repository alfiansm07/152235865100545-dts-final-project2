import React from "react";

import { configure } from "axios-hooks";
import theme from "./utils/theme";
import Axios from "axios";
import Coba from "./containers/Coba";
import Layout from "./components/Layout";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import "./App.css";
import Login from "./containers/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Register from "./containers/Register";
import Home from "./containers/Home";
import useAxios from "./hooks/useAxios";
import NewsPage from "./containers/NewsPage";
// const axiosHooks = Axios.create({
//   baseURL: "https://the-lazy-media-api.vercel.app/",
// });

// configure({ axiosHooks });

export default function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    "/api/detail/2021/01/28/balan-wonderworld-preview"
  );
  // console.log("ini data di APP tanpa param ",data)
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />{" "}
                </Layout>
              }
            />
            <Route
              path="/detail/:tahun/:bulan/:tanggal/:judul"
              element={
                <Layout>
                  <NewsPage />
                </Layout>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
