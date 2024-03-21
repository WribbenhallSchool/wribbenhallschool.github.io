import Box from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Iframe from "react-iframe";

import "./style.css";

const Policies = () => {
  const schoolPolicyDocumentsFolderId = "1FaFa6V9qXY3fhSNvLHeOvhOvBb7DUmk5";
  const inspectionFolderId = "1ElFj_qr-MPziLlgUU6o7G1do-vTIVuMk";
  const safeguardingFolderId = "1F-BFmABlv3EeuIlS5n7bqyA_fMDhon0G";
  const supportingFamiliesFolderId = "1HcHFk2OCRBiN6g3M5S2bhxX6Ppdcp2hi";

  return (
    <main style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      <Box sx={{ mt: 4 }} />
      <Typography variant="h4">Our Policies</Typography>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item sm={12} md={6}>
          <Card sx={{ minHeight: 400 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                School Policies
              </Typography>
              <Iframe
                url={`https://drive.google.com/embeddedfolderview?id=${schoolPolicyDocumentsFolderId}#list`}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={12} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Inspections
              </Typography>

              <Iframe
                url={`https://drive.google.com/embeddedfolderview?id=${inspectionFolderId}#list`}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={12} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Safeguarding
              </Typography>
              <Iframe
                url={`https://drive.google.com/embeddedfolderview?id=${safeguardingFolderId}#list`}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={12} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Supporting Families
              </Typography>
              <Iframe
                url={`https://drive.google.com/embeddedfolderview?id=${supportingFamiliesFolderId}#list`}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <br />
      <br />
    </main>
  );
};

export default Policies;
