import React from "react";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  let { query } = useParams();
  console.log("ini query", query);
  return <div>SearchPage</div>;
};

export default SearchPage;
