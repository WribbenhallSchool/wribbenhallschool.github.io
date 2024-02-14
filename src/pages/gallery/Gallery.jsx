import React, { useState } from "react";

import { default as Box, default as Container } from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Modal from "@mui/material/Modal";

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const activities = ["../../images/gallery/activities/A1.jpg"];

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
            <ImageList>
              <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">Activities</ListSubheader>
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/activities/A1.jpg")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/activities/A1.jpg"))
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/activities/A2.JPG")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/activities/A2.JPG"))
                  }
                />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item xs={12} sm={8}>
            <ImageList>
              <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">Our School</ListSubheader>
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/school/S1.jpg")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/school/S1.jpg"))
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/school/S2.jpg")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/school/S2.jpg"))
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/school/S3.jpg")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/school/S3.jpg"))
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/school/S4.jpg")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/school/S4.jpg"))
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/school/S5.jpg")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/school/S5.jpg"))
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/school/S6.jpg")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/school/S6.jpg"))
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/school/S7.jpg")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/school/S7.jpg"))
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/school/S8.jpg")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/school/S8.jpg"))
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/school/pupils.JPG")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/school/pupils.JPG"))
                  }
                />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item xs={12} sm={8}>
            <ImageList>
              <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">Wyre Forest</ListSubheader>
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/hawkbatch/H1.JPG")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/hawkbatch/H1.JPG"))
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/hawkbatch/H2.jpg")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/hawkbatch/H2.jpg"))
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={require("../../images/gallery/hawkbatch/H3.jpeg")}
                  alt={"loading..."}
                  onClick={() =>
                    openModal(require("../../images/gallery/hawkbatch/H3.jpeg"))
                  }
                />
              </ImageListItem>
            </ImageList>
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
          {modalImageSrc && (
            <img src={modalImageSrc} alt={"img"} style={{ width: "90%" }} />
          )}
        </Box>
      </Modal>
    </main>
  );
};

export default Gallery;
