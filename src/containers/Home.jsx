import React from "react";
import BannerTrending from "../components/BannerTrending";
import BreakingNews from "../components/BreakingNews";
import ListNews from "../components/ListNews";

const Home = () => {
  return (
    <div>
      <BannerTrending />
      <BreakingNews />
      <ListNews url={"/api/tech?page=1"} kategori={"tech"} />
    </div>
  );
};

export default Home;
