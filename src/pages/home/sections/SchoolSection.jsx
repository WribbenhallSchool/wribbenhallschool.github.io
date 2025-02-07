import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionStyle from "./SectionStyle";

const SchoolSection = () => {
  const cardStyle = {
    maxWidth: 345,
    margin: "0 auto",
    minHeight: 400,
  };

  return (
    <section style={SectionStyle}>
      <Typography variant="h4" gutterBottom>
        Our School
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Card sx={cardStyle}>
            <CardMedia
                component="img"
                height="190"
                image={require("../../../images/ISA_Award.JPG")}
                alt="ISA Awards"
            />
            <CardContent sx={{ minHeight: 135 }}>
              <Typography gutterBottom variant="h5" component="div">
                ISA Finalists
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are proud to be finalist in the 2023 Independent School Association SEND School of the Year Awards.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              height="190"
              image={require("../../../images/school/children.jpeg")}
              alt="classroom"
            />
            <CardContent sx={{ minHeight: 135 }}>
              <Typography gutterBottom variant="h5" component="div">
                Nature Resources
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Natural and open spaces allow the children to calm quickly. It
                supports them in their learning of academic subjects. It also
                allows them to develop strategies for social and emotional
                development and to increase their self esteem.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              height="190"
              image={require("../../../images/school/individual_classroom.jpeg")}
              alt="classroom"
            />
            <CardContent sx={{ minHeight: 135 }}>
              <Typography gutterBottom variant="h5" component="div">
                Individual Spaces
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pupils often focus better in a calm and individual environment.
                This reduction in sensory stimulation is achieved by ensuring
                each pupil can choose to work in their individual learning
                space. They can also choose to work together or alongside each
                other.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              height="190"
              image={require("../../../images/staff/Charlie.JPEG")}
              alt="classroom"
            />
            <CardContent sx={{ minHeight: 135 }}>
              <Typography gutterBottom variant="h5" component="div">
                Support Animals
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Following in the footprints of our previous therapy dog Daisy,
                Charlie provides a soothing and affectionate presence to support
                children during challenging moments. Skipper, our resident cat,
                is also there for quiet times.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default SchoolSection;
