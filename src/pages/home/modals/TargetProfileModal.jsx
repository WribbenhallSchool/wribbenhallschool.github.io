import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import modalStyle from "./ModalStyle";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const TargetProfileModal = ({ isOpen, setOpen }) => {
	return (
		<Modal
			open={isOpen}
			onClose={() => {
				setOpen(false);
			}}
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
				<Typography variant='h6' component='h2'>
					Target Profile
				</Typography>
				<Typography
					id='modal-modal-description'
					sx={{ mt: 2 }}
					variant='p'
				>
					<ul>
						<li>Anxiety</li>
						<li>Social phobia (including school phobia)</li>
					</ul>
				</Typography>
				<Typography variant='body1' sx={{ fontWeight: "bold" }}>
					This may include any number of these issues:-
				</Typography>
				<Typography
					id='modal-modal-description'
					sx={{ mt: 2 }}
					variant='p'
				>
					<ul>
						<li>Selective Mutism</li>
						<li>Panic disorder</li>
						<li>Agoraphobia</li>
						<li>Separation anxiety (including school refusal)</li>
						<li>Attachment Disorder</li>
						<li>Autism</li>
						<li>Depression</li>
						<li>Self-harming</li>
						<li>Suicidal thoughts and behaviour</li>
						<li>
							Other, co-occurring conditions may also be present
							in our target children.
						</li>
					</ul>
				</Typography>
				<Typography variant='body1' sx={{ fontWeight: "bold" }}>
					Specifically Excluded Profiles include but are not limited
					to:-
				</Typography>
				<Typography
					id='modal-modal-description'
					sx={{ mt: 2 }}
					variant='p'
				>
					<ul>
						<li>
							Moderate, Severe, and Profound and Multiple Learning
							Difficulties
						</li>
						<li>Pathological Demand Avoidance</li>
						<li>Conduct Disorder</li>
					</ul>
				</Typography>

				<Typography
					id='modal-modal-description'
					sx={{ mt: 2 }}
					variant='p'
					paragraph
				>
					Each child's application will be considered, by the
					proprietor, on an individual basis, taking into
					consideration the attributes of the current pupils.
				</Typography>

				<Typography
					id='modal-modal-description'
					sx={{ mt: 2 }}
					variant='p'
					paragraph
				>
					No previous outcomes can be considered a precedent or guide
					to future decisions made by the proprietor.
				</Typography>
				<Typography
					id='modal-modal-description'
					sx={{ mt: 2 }}
					variant='p'
					paragraph
				>
					This decision will be based on information received from the
					pupil's current placement, information on their EHCP,
					information from professionals who have assessed the pupil
					and an interview with the child and their parent(s)/family.
				</Typography>
			</Box>
		</Modal>
	);
};

export default TargetProfileModal;
