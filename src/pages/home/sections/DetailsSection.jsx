import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionStyle from "./SectionStyle";

const DetailsCardStyle = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  wordWrap: "break-word",
};

const DetailsSection = () => {
  return (
    <section style={SectionStyle}>
      <Typography variant="h4" gutterBottom>
        Our Details
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card sx={DetailsCardStyle}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Proprietor/Headteacher
              </Typography>

              <Typography gutterBottom variant="body1" component="h2">
                Mr Ellis Wells
              </Typography>

              <ul>
                <li>
                  <b>enquiries@wribbenhallschool.co.uk</b>
                </li>
                <li>
                  <b>01299 405383</b>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={DetailsCardStyle}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Our Governor
              </Typography>
              <Typography gutterBottom variant="body1" component="h2">
                Mrs Linda Minnock
              </Typography>
              <ul>
                <li>
                  <b>l.minnock@btinternet.com</b>
                </li>
                <li>
                  <b>01299 405383</b>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={DetailsCardStyle}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                School Address
              </Typography>
              <Typography gutterBottom variant="body1" component="h2">
                21 Crundalls Lane, Bewdley, Worcestershire, DY12 1JL
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default DetailsSection;
