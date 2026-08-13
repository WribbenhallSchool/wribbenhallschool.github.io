import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionStyle from "./SectionStyle";

const AboutSection = ({ setTargetModalOpen }) => {
  return (
    <section style={SectionStyle}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item sm={12} md={6}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                What kinds of SEN do we provide for?
              </Typography>
              <Typography variant="p">
                We are committed to ensuring that all pupils achieve their
                potential, personally, socially, emotionally and academically
                across all areas of the curriculum, regardless of their gender,
                ethnicity, social background or religion.
              </Typography>
              <Typography variant="p">
                <ul>
                  <li>
                    <a
                      href={require("../../../images/SEN_Information_Report.docx")}
                      download="SEN Information Report.docx"
                      style={{ color: "inherit" }}
                    >
                      SEND Information Report
                    </a>
                  </li>
                </ul>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() =>
                  window.open("https://files.ofsted.gov.uk/v1/file/50169284")
                }
              >
                View Our Ofsted Report
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Pupil Profile
              </Typography>
              <Typography variant="p" paragraph>
                We provide Specialist Education for SEMH children aged 5-18
                years, who are too anxious to attend schools and other
                establishments.
              </Typography>
              <Typography variant="p" paragraph>
                Our Key Pupil Profile states the main issues that we are able
                to/not able to provide for. Each child’s application will be
                considered, by the proprietor, on an individual basis, taking
                into consideration the attributes of the current pupils.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  setTargetModalOpen(true);
                }}
              >
                View Our Target Profile
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutSection;
