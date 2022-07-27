import { Card, CardActionArea, CardMedia } from "@mui/material";
import useAxios from "axios-hooks";
import React from "react";

const CardNews = (props) => {
  const { author, desc, key, tag, thumb, time, title } = props.data;
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          ></CardMedia>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardNews;
