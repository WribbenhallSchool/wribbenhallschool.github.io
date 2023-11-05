import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import SectionStyle from "./SectionStyle";

const Staff = ({ image, name, statement }) => {
  const staffElementStyle = {
    maxWidth: 345,
    textAlign: "center",
  };
  return (
    <Box sx={staffElementStyle}>
      <img
        src={image}
        alt={name}
        width="90px"
        style={{ clipPath: "circle()" }}
      />
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1" sx={{ pl: 2, pr: 2 }}>
        {statement}
      </Typography>
    </Box>
  );
};

const StaffSection = () => {
  return (
    <section style={SectionStyle}>
      <Typography variant="h4" gutterBottom>
        Our Staff
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <Staff
            name={"Sally Wells"}
            image={require("../../../images/staff/SallyWells.png")}
            statement={
              "I am a Qualified Learning Support Assistant, experienced in SEN Learning Support. I have the patience to support children in their understanding and scaffold their learning."
            }
          />
        </Grid>
        <Grid item>
          <Staff
            name={"Ellis Wells"}
            image={require("../../../images/staff/EllisWells.png")}
            statement={
              "I am a qualified and experienced, teacher and SENDCo. I have completed a Post Experience Diploma in Psychology. I have a passion to work with children with additional needs and understand that their environment, interactions and attachment with others has a big impact on their learning."
            }
          />
        </Grid>
        <Grid item>
          <Staff
            name={"Anthony Arnold"}
            image={require("../../../images/staff/AnthonyArnold.jpeg")}
            statement={
              "I am a Qualified Learning Support Assistant, experienced in SEN Learning Support. I use humour, patience and story telling to support children's SEMH needs. I use play and art to support their learning."
            }
          />
        </Grid>
        <Grid item>
          <Staff
            name={"Vikki Mathews"}
            image={require("../../../images/staff/VikkiMathews.jpg")}
            statement={
              "I am a Qualified Teacher with SEN Specialism. I have also completed a Lego Therapy course. I am passionate about working with children with SEN and SEMH and have a great understanding for how to promote learning. I use a nurturing and calm approach to ensure all children feel safe and secure so they are ready to learn. "
            }
          />
        </Grid>
        <Grid item>
          <Staff
            name={"Charlie"}
            image={require("../../../images/staff/Charlie.JPEG")}
            statement={
              "Charlie is our new puppy training to be an Assistance Dog. He is loving, clever and energetic. He enjoys being with people.\n"
            }
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default StaffSection;
