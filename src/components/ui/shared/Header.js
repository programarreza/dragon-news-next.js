"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

import title from "@/assets/title.png";
import { getCurrentDate } from "@/utils/getCurrentDate";
const Header = () => {
  const currentDate = getCurrentDate();

  return (
    <Box className="my-6 ">
      <Container>
        <Image src={title} alt="title" width={500} height={500} className="text-center mx-auto  "/>
        <Typography variant="body2" color="gray" textAlign={"center"} className="my-2">
          Journalism Without Fear or Favour
        </Typography>
        <Typography  textAlign={"center"}>
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
