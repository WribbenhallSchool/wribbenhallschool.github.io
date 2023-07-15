import Container from "@mui/material/Container";
import Box from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { CardActions } from "@mui/material";
import DocumentsModal from "./modals/DocumentsModal";
import { useState } from "react";

const Vacancies = () => {
  const [targetModalOpen, setTargetModalOpen] = useState(false);
  return (
    <main>
      <Container>
        <Box sx={{ mt: 4 }} />
        <Typography variant="h4">Vacancies</Typography>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item sm={12} md={8}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Assistant Head DSL
                </Typography>

                <Typography variant="p" gutterBottom>
                  Wribbenhall School is a small independent specialist school
                  with four pupils. We have a calm, nurturing and enabling
                  environment for SEN children who are too anxious to attend
                  Mainstream Schools. Pupils staff and parents describe us as
                  ‘the best school in the world.’
                </Typography>
                <br />
                <br />
                <Typography variant="p" gutterBottom>
                  This position is ideal for a teacher with experience of
                  working in a SEN environment and is ready to step up from
                  middle to senior management. Applicants will only be
                  considered if they have visited the school. Visits are to be
                  arranged in August during the summer holiday.
                </Typography>
                <br />
                <br />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  To apply, see the documents below which should be returned to
                  Ellis Wells by the closing date in the advert.
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  If you have any questions please contact the school on 01299
                  405383 or ewells@wribbenhallschool.co.uk
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => setTargetModalOpen(true)}>
                  Documents
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DocumentsModal isOpen={targetModalOpen} setOpen={setTargetModalOpen} />
    </main>
  );
};

export default Vacancies;
