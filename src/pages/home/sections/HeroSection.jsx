import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const HeroSection = () => {
  const imageStyle = {
    borderRadius: "20px",
    marginBottom: "10px",
    textAlign: "center",
  };
  return (
    <section>
      <Box
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <img
            src={require("../../../images/school_logo.jpeg")}
            alt="logo"
            style={{
              width: "125px",
              height: "125px",
              borderRadius: "20px",
              display: "block",
              margin: "0 auto",
              marginBottom: "20px",
            }}
          />
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "light" }}
            gutterBottom
          >
            Wribbenhall School
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: "light" }}
            align="center"
            color="text.secondary"
            paragraph
          >
            At Wribbenhall School we aim to nurture, inspire and re-engage
            children to achieve their full potential by providing a secure,
            caring and supportive environment where every child is valued as an
            individual.
            <br />
            We promote children and adults with positive self-esteem, confidence
            in their judgement, self-reliance, independence, ambition and
            compassion
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: "light" }}
            align="center"
            color="text.secondary"
            paragraph
          ></Typography>

          <Stack
            sx={{ pt: 3 }}
            direction={{ sm: "column", md: "row" }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={require("../../../images/thrive_logo.jpg")}
              alt=""
              style={{
                height: "80px",
                width: "110px",
                ...imageStyle,
              }}
            />{" "}
            <img
              src={require("../../../images/ofsted_logo.jpeg")}
              alt=""
              style={{
                height: "80px",
                width: "80px",
                ...imageStyle,
              }}
            />
            <img
              src={require("../../../images/lead_partner_with.png")}
              alt=""
              style={{
                height: "80px",
                width: "180px",
                ...imageStyle,
              }}
            />
            <img
              src={require("../../../images/ISA.jpg")}
              alt=""
              style={{
                height: "80px",
                width: "180px",
                ...imageStyle,
              }}
            />
            <img
              src={require("../../../images/award.png")}
              alt=""
              style={{
                height: "80px",
                width: "180px",
                ...imageStyle,
              }}
            />
          </Stack>
        </Container>
      </Box>
    </section>
  );
};

export default HeroSection;
