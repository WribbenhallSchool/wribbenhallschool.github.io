import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "theme.spacing.unit * 6",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        &copy; Wribbenhall School {new Date().getFullYear()} VAT# GB478248449
      </Typography>
    </footer>
  );
};

export default Footer;
