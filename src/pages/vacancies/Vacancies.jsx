import Container from "@mui/material/Container";
import Iframe from "react-iframe";

import Box from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import DocumentsModal from "./modals/DocumentsModal";
import { useState } from "react";

const Vacancies = () => {
  const [targetModalOpen, setTargetModalOpen] = useState(false);

  const vacanicesFolderId = "1FHOK_6Q1xb2zuUucMXO3grLqmKHBcwEg";

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
                  HLTA
                </Typography>

                <Typography variant="p" gutterBottom>
                  Work with the Assistant Head Teacher and Head Teacher to raise
                  the learning and attainment of pupils Promote pupils’
                  independence, self-esteem and social inclusion Give support to
                  pupils, individually or in groups, so they can access the
                  curriculum, take part in learning, and experience a sense of
                  achievement
                </Typography>
                <br />
                <br />
                <Typography variant="p" gutterBottom>
                  To apply, please see the documents below which should be
                  returned to Ellis Wells by the closing date in the advert.
                </Typography>
                <br />
                <br />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  If you have any questions please contact the school on 01299
                  405383 or ewells@wribbenhallschool.co.uk
                </Typography>
              </CardContent>
              <Card sx={{ minWidth: 275, maxHeight: 275 }}>
                <CardContent>
                  <Iframe
                    url={`https://drive.google.com/embeddedfolderview?id=${vacanicesFolderId}#list`}
                  />
                </CardContent>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <DocumentsModal isOpen={targetModalOpen} setOpen={setTargetModalOpen} />
    </main>
  );
};

export default Vacancies;
