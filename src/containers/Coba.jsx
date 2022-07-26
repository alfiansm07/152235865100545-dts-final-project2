import useAxios from "axios-hooks";
import React from "react";

const Coba = () => {
  const [{ data, loading, error }] = useAxios(
    "/api/detail/2021/01/28/balan-wonderworld-preview"
  );
  //   const { results } = data;
  const { results } = data;
  if (loading) return "Loading...";
  if (error) return "Error!";
  console.table("inidata", data);
  console.table("inidata", results);

  return <div></div>;
};

export default Coba;
