import axios from "axios";
import React, { useEffect, useState } from "react";

import { default as Box, default as Container } from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Modal from "@mui/material/Modal";

const Gallery = () => {
  const [schoolImages, setSchoolImages] = useState();
  const [hawkbatchImages, setHawkbatchImages] = useState();
  const [animalImages, setAnimalImages] = useState();
  const [activitiesImages, setActivitiesImages] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState();

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "none",
    p: 4,
  };

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/repos/WribbenhallSchool/Files/contents/Images/School"
      )
      .then((response) => {
        setSchoolImages(response.data);
      });
    axios
      .get(
        "https://api.github.com/repos/WribbenhallSchool/Files/contents/Images/Hawkbatch"
      )
      .then((response) => {
        setHawkbatchImages(response.data);
      });
    axios
      .get(
        "https://api.github.com/repos/WribbenhallSchool/Files/contents/Images/Animals"
      )
      .then((response) => {
        setAnimalImages(response.data);
      });
    axios
      .get(
        "https://api.github.com/repos/WribbenhallSchool/Files/contents/Images/Activities"
      )
      .then((response) => {
        setActivitiesImages(response.data);
      });
  }, []);

  const openModal = (src) => {
    setModalImageSrc(src);
    setModalIsOpen(true);
  };

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
                      onClick={() => openModal(item.download_url)}
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
                      onClick={() => openModal(item.download_url)}
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
                      onClick={() => openModal(item.download_url)}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={8}>
            {activitiesImages ? (
              <ImageList>
                <ImageListItem key="Subheader" cols={2}>
                  <ListSubheader component="div">Activities</ListSubheader>
                </ImageListItem>
                {activitiesImages.map((item) => (
                  <ImageListItem key={item.download_url}>
                    <img
                      src={item.download_url}
                      srcSet={item.download_url}
                      alt="Loading..."
                      loading="lazy"
                      onClick={() => openModal(item.download_url)}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            ) : null}
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <Box
          sx={modalStyle}
          style={{
            maxWidth: "700px",
            width: "100%",
            padding: 0,
            textAlign: "center",
            outline: "none",
          }}
        >
          <img src={modalImageSrc} alt={"img"} style={{ width: "90%" }} />
        </Box>
      </Modal>
    </main>
  );
};

export default Gallery;
