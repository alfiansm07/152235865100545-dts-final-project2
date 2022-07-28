import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import React from "react";

const CardNews = (props) => {
  const { author, desc, key, tag, thumb, time, title } = props.data;
  console.log("props data ", props);
  return (
    <>
      <Typography>{title}</Typography>

      {/* <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.data.thumb}
            alt="green iguana"
          ></CardMedia>
        </CardActionArea>
      </Card> */}
    </>
  );
};

export default CardNews;
