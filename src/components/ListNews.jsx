import React from "react";
import useAxios from "../hooks/useAxios";
import CardNews from "./CardNews";

const ListNews = (props) => {
  const { url, kategori } = props;

  const [{ data, loading, error }, refetch] = useAxios({ url });
  console.log("listnews", data);
  return <CardNews data={data} />;
};

export default ListNews;
