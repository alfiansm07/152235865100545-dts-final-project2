import React from "react";

import useAxios, { configure } from "axios-hooks";
import theme from "./utils/theme";
import Axios from "axios";
import Coba from "./containers/Coba";
import Layout from "./components/Layout";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import "./App.css";
import Login from "./containers/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Register from "./containers/Register";
const axiosHooks = Axios.create({
  baseURL: "https://the-lazy-media-api.vercel.app/",
});

configure({ axiosHooks });

export default function App() {
  const [{ data, loading, error }, refetch] = useAxios();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />\
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
