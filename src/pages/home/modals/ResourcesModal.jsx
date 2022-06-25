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
					Natual and open spaces allow the children to calm quickily.
					It supports them in their learning of academic subjects.
                    It also allows them to develop strategies for social and
					emotional development and to increase their self esteem.
				</Typography>
				<Typography id='modal-modal-description'>
					
				</Typography>
			</Box>
		</Modal>
	);
};

export default ResourcesModal;
