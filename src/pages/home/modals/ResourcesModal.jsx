import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import modalStyle from "./ModalStyle";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const ResourcesModal = ({ isOpen, setOpen }) => {
	return (
		<Modal
			open={isOpen}
			onClose={() => {
				setOpen(false);
			}}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={modalStyle}>
				<IconButton
					aria-label='close'
					style={{ float: "right" }}
					onClick={() => {
						setOpen(false);
					}}
				>
					<CloseIcon />
				</IconButton>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					Resources Information
				</Typography>
				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</Typography>
			</Box>
		</Modal>
	);
};

export default ResourcesModal;
