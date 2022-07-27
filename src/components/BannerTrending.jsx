import useAxios from "../hooks/useAxios";

import React from "react";

const BannerTrending = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    "/api/detail/2021/01/28/balan-wonderworld-preview"
  );
  console.log("dataku", data);

  return <></>;
};

export default BannerTrending;
