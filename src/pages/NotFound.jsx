import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const NotFound = () => {
  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "80vh" }}
      >
        <Grid item xs={3}>
          <Box textAlign="center">
            <Typography variant="h3">Page not found</Typography>
            <br />
            <Button
              variant="contained"
              onClick={() => {
                window.location.href = window.location.origin;
              }}
            >
              Go home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFound;
