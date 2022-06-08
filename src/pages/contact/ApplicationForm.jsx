import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const ApplicationForm = ({ handleSubmit }) => {
	const [attendance, setAttendance] = React.useState("");

	const handleAttendanceChange = (event) => {
		setAttendance(event.target.value);
	};

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Container>
					<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
						Make an Enquiry
					</Typography>
					<TextField
						style={{ margin: "5px" }}
						id='standard-basic'
						label="Your Child's Full Name"
						variant='standard'
						fullWidth
					/>
					<br />
					<TextField
						style={{ margin: "5px" }}
						id='standard-basic'
						label="Your Child's DOB"
						helperText='DD/MM/YYYY'
						variant='standard'
						fullWidth
					/>
					<br />
					<br />

					<TextField
						style={{ margin: "5px" }}
						placeholder='Please include any behaviour/anxiety or medical conditions issues your child may have...'
						multiline
						rows={3}
						fullWidth
					/>

					<br />

					<TextField
						style={{ margin: "5px" }}
						id='standard-basic'
						label="Your Child's Current School"
						variant='standard'
						fullWidth
					/>
					<br />
					<br />
					<FormControl fullWidth>
						<InputLabel id='demo-simple-select-label'>
							Current Attendance
						</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={attendance}
							label='Current Attendance'
							onChange={handleAttendanceChange}
						>
							<MenuItem value={"Full Time"}>Full Time</MenuItem>
							<MenuItem value={"Reduced"}>Reduced</MenuItem>
						</Select>
					</FormControl>
					<br />
					<TextField
						style={{ margin: "5px" }}
						id='standard-basic'
						label="Your Child's Full Name"
						variant='standard'
						fullWidth
					/>
					<br />
					<TextField
						style={{ margin: "5px" }}
						id='standard-basic'
						label='Your Email Address'
						variant='standard'
						fullWidth
					/>
					<br />
					<TextField
						style={{ margin: "5px" }}
						id='standard-basic'
						label='Prefered appoinment date'
						helperText='DD/MM/YYYY (Leave empty to discuss this at a later date)'
						variant='standard'
						fullWidth
					/>
					<br />
					<br />
					<TextField
						style={{ margin: "5px" }}
						placeholder='Additional notes or questions...'
						multiline
						rows={3}
						fullWidth
					/>
				</Container>
			</CardContent>
			<CardActions>
				<Button size='small' variant='contained' onClick={handleSubmit}>
					Submit
				</Button>
			</CardActions>
		</Card>
	);
};

export default ApplicationForm;
