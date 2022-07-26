import React from "react";

import useAxios, { configure } from "axios-hooks";

import Axios from "axios";
import Coba from "./containers/Coba";

const axios = Axios.create({
  baseURL: "https://the-lazy-media-api.vercel.app/",
});

configure({ axios });

export default function App() {
  const [{ data, loading, error }, refetch] = useAxios();

  return (
    <div>
      <button onClick={refetch}>refetch</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <Coba />
    </div>
  );
}
