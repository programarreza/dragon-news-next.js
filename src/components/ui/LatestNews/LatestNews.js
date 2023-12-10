import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardMedia>
          <Image src={topNews} alt="top news" className="w-full" height={500} />
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

      {/* single news */}
      <Grid className="mt-4" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card>
            <CardMedia>
              <Image
                src={topNews2}
                alt="top news"
                className="w-full"
                height={500}
              />
            </CardMedia>

            <CardContent>
              <p className="w-fit p-2 bg-red-500 text-white rounded-md my-4">
                Technology
              </p>
              <Typography gutterBottom >
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography gutterBottom className="my-4">
                By programar reza - Mar 18 2023
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout........
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia>
              <Image
                src={topNews2}
                alt="top news"
                className="w-full"
                height={500}
              />
            </CardMedia>

            <CardContent>
              <p className="w-fit p-2 bg-red-500 text-white rounded-md my-4">
                Technology
              </p>
              <Typography gutterBottom >
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography gutterBottom className="my-4">
                By programar reza - Mar 18 2023
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout........
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia>
              <Image
                src={topNews2}
                alt="top news"
                className="w-full"
                height={500}
              />
            </CardMedia>

            <CardContent>
              <p className="w-fit p-2 bg-red-500 text-white rounded-md my-4">
                Technology
              </p>
              <Typography gutterBottom >
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography gutterBottom className="my-4">
                By programar reza - Mar 18 2023
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout........
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia>
              <Image
                src={topNews2}
                alt="top news"
                className="w-full"
                height={500}
              />
            </CardMedia>

            <CardContent>
              <p className="w-fit p-2 bg-red-500 text-white rounded-md my-4">
                Technology
              </p>
              <Typography gutterBottom >
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography gutterBottom className="my-4">
                By programar reza - Mar 18 2023
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout........
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
