import React, { useState } from "react";

import emailjs from "@emailjs/browser";

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
	const [formTemplate, setFormTemplate] = useState("Enquiry");
	const [alertStatus, setAlertStatus] = useState({
		open: false,
		success: false,
	});

	const send = (formData) => {
		emailjs
			.send(
				"default_service",
				formTemplate,
				formData,
				"user_CX0fRexPbdyHh3r3KjwX1"
			)
			.then(
				() => {
					setAlertStatus({
						open: true,
						success: true,
					});
				},
				() => {
					setAlertStatus({
						open: true,
						success: false,
					});
				}
			);
	};

	const handleClose = () =>
		setAlertStatus({
			open: false,
			success: false,
		});

	return (
		<main>
			{/* Notification */}
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				open={alertStatus.open}
				autoHideDuration={2000}
				onClose={handleClose}
			>
				<Alert
					severity={alertStatus.success ? "success" : "error"}
					sx={{ width: "100%" }}
				>
					Your {formTemplate}{" "}
					{alertStatus.success
						? " has been sent successfully."
						: " failed to send. Please try again."}
				</Alert>
			</Snackbar>

			<Container style={{ textAlign: "center" }}>
				<Box sx={{ mt: 4 }} />
				<Typography variant='h4'>Contact Us</Typography>

				{/* Form Options */}
				<Box sx={{ pt: 4 }}>
					<Typography
						variant='h5'
						style={{ textAlign: "center" }}
						gutterBottom
					>
						Select a form:
					</Typography>

					<Stack direction='row' spacing={2} justifyContent='center'>
						<Button
							variant={
								formTemplate === "Enquiry"
									? "contained"
									: "outlined"
							}
							sx={{ minWidth: 150 }}
							color='primary'
							onClick={() => {
								setFormTemplate("Enquiry");
							}}
						>
							Enquiry
						</Button>
						<Button
							variant={
								formTemplate === "Application"
									? "contained"
									: "outlined"
							}
							sx={{ minWidth: 150 }}
							color='primary'
							onClick={() => {
								setFormTemplate("Application");
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
						{formTemplate === "Enquiry" ? (
							<EnquiryForm send={send} />
						) : (
							<ApplicationForm send={send} />
						)}
					</Grid>
				</Grid>

				<Typography variant='body1'>
					Alternatively, email us directly at:
					ewells@wribbenhallschool.co.uk
				</Typography>
			</Container>
			<br />
			<br />
		</main>
	);
};

export default Contact;
