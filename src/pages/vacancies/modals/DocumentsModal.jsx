import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import modalStyle from "./ModalStyle";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const DocumentsModal = ({ isOpen, setOpen }) => {
  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Box sx={modalStyle}>
        <IconButton
          aria-label="close"
          style={{ float: "right" }}
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" component="h2" gutterBottom>
          Assistant Head DSL - Application Documents
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="p">
          <ul>
            <li style={{ marginBottom: "5px" }}>
              <Link
                to="/vacancy-documents/Application Form school staff - GDPR.docx"
                target="_blank"
                download
              >
                Application Form school staff
              </Link>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <Link
                to="/vacancy-documents/Assistant Head DSL Teacher Advert June 2022.docx"
                target="_blank"
                download
              >
                Assistant Head DSL Teacher Advert June 2022
              </Link>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <Link
                to="/vacancy-documents/Job Description and Person Specification.docx"
                target="_blank"
                download
              >
                Job Description and Person Specification
              </Link>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <Link
                to="/vacancy-documents/Pre-employment Medical Questionnaire.docx"
                target="_blank"
                download
              >
                Pre-employment Medical Questionnaire
              </Link>
            </li>
            <li>
              <Link
                to="/vacancy-documents/Staff Disqualification Self Declaration.docx"
                target="_blank"
                download
              >
                Staff Disqualification Self Declaration
              </Link>
            </li>
          </ul>
        </Typography>
      </Box>
    </Modal>
  );
};

export default DocumentsModal;
