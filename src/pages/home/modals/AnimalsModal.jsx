import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import modalStyle from "./ModalStyle";

const AnimalsModal = ({ isOpen, setOpen }) => {
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
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					Support Animals Information
				</Typography>
				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</Typography>
			</Box>
		</Modal>
	);
};

export default AnimalsModal;
