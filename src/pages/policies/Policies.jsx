import React, { useEffect, useState } from "react";
import axios from "axios";

import Container from "@mui/material/Container";
import Box from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const Policies = () => {
  const [ofstedFiles, setOfstedFiles] = useState();
  const [safeguardingFiles, setSafeguardingFiles] = useState();
  const [policyFiles, setPolicyFiles] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/repos/WribbenhallSchool/Files/contents/Documents/Ofsted"
      )
      .then((response) => {
        setOfstedFiles(response.data);
      });
    axios
      .get(
        "https://api.github.com/repos/WribbenhallSchool/Files/contents/Documents/Safeguarding"
      )
      .then((response) => {
        setSafeguardingFiles(response.data);
      });
    axios
      .get(
        "https://api.github.com/repos/WribbenhallSchool/Files/contents/Documents/School policy documents"
      )
      .then((response) => {
        setPolicyFiles(response.data);
      });
  }, []);

  return (
    <main>
      <Container>
        <Box sx={{ mt: 4 }} />
        <Typography variant="h4">Our Policies</Typography>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item sm={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  School policy documents
                </Typography>
                <Typography variant="p">
                  <ul style={{ paddingLeft: "20px" }}>
                    {policyFiles?.map((file, i) => (
                      <li key={i} style={{ padding: "5px" }}>
                        <a
                          href={file.download_url}
                          style={{
                            color: "inherit",
                          }}
                        >
                          {file.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ofsted
                </Typography>
                <Typography variant="p">
                  <ul style={{ paddingLeft: "20px" }}>
                    {ofstedFiles?.map((file, i) => (
                      <li key={i} style={{ padding: "5px" }}>
                        <a
                          href={file.download_url}
                          style={{ color: "inherit" }}
                        >
                          {file.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Safeguarding
                </Typography>
                <Typography variant="p">
                  <ul style={{ paddingLeft: "20px" }}>
                    {safeguardingFiles?.map((file, i) => (
                      <li key={i} style={{ padding: "5px" }}>
                        <a
                          href={file.download_url}
                          style={{ color: "inherit" }}
                        >
                          {file.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
    </main>
  );
};

export default Policies;
