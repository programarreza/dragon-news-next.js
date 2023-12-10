import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import sideBarImage from "@/assets/side-top-news.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardMedia>
          <Image
            src={sideBarImage}
            alt="top news"
            className="w-full"
            height={500}
          />
        </CardMedia>

        <CardContent>
          <p className="w-fit p-2 bg-red-500 text-white rounded-md my-4">
            Technology
          </p>
          <Typography gutterBottom variant="h5" component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom className="my-4">
            By programar reza - Mar 18 2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Sidebar;
