import React, { useState } from "react";

// import { SMTPClient } from "emailjs";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Container from "@mui/material/Container";

import EnquiryForm from "./EnquiryForm";
import ApplicationForm from "./ApplicationForm";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Contact = () => {
	const [formName, setFormName] = useState("enquiry");
	const [alertState, setAlertState] = React.useState(false);

	const send = (formData) => {
		// TODO: Send data
		setAlertState(true);
	};

	const handleClose = () => setAlertState(false);

	return (
		<main>
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

			<Container style={{ textAlign: "center" }}>
				<Box sx={{ mt: 4 }} />
				<Typography variant='h4'>Contact Us</Typography>

				{/* Form Options */}
				<Box sx={{ pt: 4 }}>
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
							variant={
								formName === "application" ? "contained" : "outlined"
							}
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
							<EnquiryForm send={send} />
						) : (
							<ApplicationForm send={send} />
						)}
					</Grid>
				</Grid>

				<Typography variant='body1'>
					Alternatively, email us directly at: ewells@wribbenhallschool.co.uk
				</Typography>
			</Container>
			<br />
			<br />
		</main>
	);
};

export default Contact;
