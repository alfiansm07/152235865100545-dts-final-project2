import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import useAxios from "axios-hooks";
import React from "react";

const CardNews = (props) => {
  const { author, desc, key, tag, thumb, time, title } = props.data;
  console.log("props data ", props);
  return (
    <>
      <Card
        sx={{
          maxWidth: "438px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          mb: 2,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="210px"
            image={thumb}
            alt="green iguana"
          ></CardMedia>
          <CardContent>
            <Typography variant="h6" color="initial" mb={2}>
              {title}
            </Typography>
            <Divider />
            <Typography my={2} variant="body1" color="initial">
              {desc}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
            >
              <Typography variant="subtitle2" color="initial">
                By : {author}
              </Typography>
              <Typography variant="subtitle2" color="initial">
                {time}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardNews;
