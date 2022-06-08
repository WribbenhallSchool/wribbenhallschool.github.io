import React, { useState } from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import EnquiryForm from "./EnquiryForm";
import ApplicationForm from "./ApplicationForm";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Contact = () => {
	const [formName, setFormName] = useState("enquiry");
	const [alertState, setSlertState] = React.useState(false);

	const handleSubmit = () => setSlertState(true);
	const handleClose = () => setSlertState(false);

	return (
		<section>
			{/* Notification */}
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				open={alertState}
				autoHideDuration={2000}
				onClose={handleClose}
			>
				<Alert severity='success' sx={{ width: "100%" }}>
					Your {formName} has been sent successfully.
				</Alert>
			</Snackbar>

			{/* Form Options */}
			<Box sx={{ pt: 8 }}>
				<Typography variant='h5' style={{ textAlign: "center" }} gutterBottom>
					Select a form:
				</Typography>

				<Stack direction='row' spacing={2} justifyContent='center'>
					<Button
						variant={formName === "enquiry" ? "contained" : "outlined"}
						sx={{ minWidth: 150 }}
						color='primary'
						onClick={() => {
							setFormName("enquiry");
						}}
					>
						Enquiry
					</Button>
					<Button
						variant={formName === "application" ? "contained" : "outlined"}
						sx={{ minWidth: 150 }}
						color='primary'
						onClick={() => {
							setFormName("application");
						}}
					>
						Application
					</Button>
				</Stack>
			</Box>

			{/* Centered Form */}
			<Grid
				container
				alignItems='center'
				justifyContent='center'
				sx={{ py: 8 }}
				p={4}
			>
				<Grid item xs={12} sm={8}>
					{formName === "enquiry" ? (
						<EnquiryForm handleSubmit={handleSubmit} />
					) : (
						<ApplicationForm handleSubmit={handleSubmit} />
					)}
				</Grid>
			</Grid>
		</section>
	);
};

export default Contact;
