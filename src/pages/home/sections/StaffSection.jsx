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
        maxHeight="90px"
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
            name={"Ellis Wells"}
            image={require("../../../images/staff/EllisWells.png")}
            statement={
              "I am a qualified and experienced, teacher and SENDCo. I have completed a Post Experience Diploma in Psychology. I have a passion to work with children with additional needs and understand that their environment, interactions and attachment with others has a big impact on their learning."
            }
          />
        </Grid>

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
            name={"Carrie Lloyd"}
            image={require("../../../images/staff/Carrie.png")}
            statement={
              "I am a qualified and experienced teacher, with a degree in Special Needs Education. I am passionate about working with children to help them become highly skilled and life ready young people, who are prepared for the world ahead, regardless of need or background. I am dedicated to getting education right for each individual.   "
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
            name={"Donna Smith"}
            image={require("../../../images/staff/DonnaSmith.png")}
            statement={
              "I have gained years of administrative experience from many diverse environments both within the public and private sectors.  Currently, I am working towards gaining my Level 4 Diploma in School Business Management, to help support the school to its best potential.  As well as being the Administrator of Wribbenhall School, I am also a qualified Swimming Teacher and enjoy assisting the children in this area too."
            }
          />
        </Grid>

        <Grid item>
          <Staff
            name={"Becca Mason"}
            image={require("../../../images/staff/BeccaMason.png")}
            statement={
              "I am a qualified teacher with several years experience working closely with children with SEMH needs. I believe it is key to provide a safe, calm, nurturing environment within which children can become confident and secure in themselves and their abilities. I am trained and experienced in delivering Lego Therapy sessions and am looking forward to broadening my experience and training in other therapeutic approaches. "
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
            name={"Josh Darby"}
            image={require("../../../images/staff/JoshDarby.jpg")}
            statement={
              "I support the school as Ground Technician.  With a level 2 qualification in Property Maintenance, I have years of experience working in education as a Site Operative and started my career as an SEN Teaching Assistant.  Using patience and understanding, I strive to provide a calm atmosphere for our pupils to learn in."
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
