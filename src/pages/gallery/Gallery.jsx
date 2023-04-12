import React, { useEffect, useState } from "react";
import axios from "axios";

import Container from "@mui/material/Container";
import Box from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";

const Gallery = () => {
  const [schoolImages, setSchoolImages] = useState();
  const [hawkbatchImages, setHawkbatchImages] = useState();
  const [animalImages, setAnimalImages] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/repos/EllisCWells/WribbenhallFiles/contents/Images/School"
      )
      .then((response) => {
        setSchoolImages(response.data);
      });
    axios
      .get(
        "https://api.github.com/repos/EllisCWells/WribbenhallFiles/contents/Images/Hawkbatch"
      )
      .then((response) => {
        setHawkbatchImages(response.data);
      });
    axios
      .get(
        "https://api.github.com/repos/EllisCWells/WribbenhallFiles/contents/Images/Animals"
      )
      .then((response) => {
        setAnimalImages(response.data);
      });
  }, []);

  return (
    <main>
      <Container>
        <Box sx={{ mt: 4 }} />
        <Typography variant="h4">Our Gallery</Typography>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ py: 8 }}
          p={4}
        >
          <Grid item xs={12} sm={8}>
            {schoolImages ? (
              <ImageList>
                <ImageListItem key="Subheader" cols={2}>
                  <ListSubheader component="div">Our School</ListSubheader>
                </ImageListItem>
                {schoolImages.map((item) => (
                  <ImageListItem key={item.download_url}>
                    <img
                      src={item.download_url}
                      srcSet={item.download_url}
                      alt="Loading..."
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={8}>
            {hawkbatchImages ? (
              <ImageList>
                <ImageListItem key="Subheader" cols={2}>
                  <ListSubheader component="div">Wyre Forest</ListSubheader>
                </ImageListItem>
                {hawkbatchImages.map((item) => (
                  <ImageListItem key={item.download_url}>
                    <img
                      src={item.download_url}
                      srcSet={item.download_url}
                      alt="Loading..."
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={8}>
            {animalImages ? (
              <ImageList>
                <ImageListItem key="Subheader" cols={2}>
                  <ListSubheader component="div">Support Animals</ListSubheader>
                </ImageListItem>
                {animalImages.map((item) => (
                  <ImageListItem key={item.download_url}>
                    <img
                      src={item.download_url}
                      srcSet={item.download_url}
                      alt="Loading..."
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Gallery;
