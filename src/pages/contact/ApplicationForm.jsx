import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const ApplicationForm = ({ send }) => {
	const initialFormState = {
		childFullName: "",
		childDOB: "",
		behaviourNotes: "",
		currentSchool: "",
		attendance: "",
		parentFullName: "",
		email: "",
		appointmentDate: "",
		additionalNotes: "",
	};

	const [formData, updateFormData] = useState(initialFormState);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleAttendanceChange = (event) => {
		updateFormData({
			...formData,
			attendance: event.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.stopPropagation();
		e.preventDefault();
		updateFormData(initialFormState);
		document.getElementById("application-form").reset();
		send(formData);
	};

	console.log(formData);

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<form onSubmit={handleSubmit} id='application-form'>
					<Typography
						sx={{ fontSize: 14 }}
						color='text.secondary'
						gutterBottom
					>
						Make an Application
					</Typography>
					<TextField
						style={{ margin: "5px" }}
						label="Your child's full name"
						variant='standard'
						required
						onInput={handleChange}
						name='childFullName'
						fullWidth
					/>
					<br />
					<TextField
						style={{ margin: "5px" }}
						label="Your child's DOB"
						required
						helperText='DD/MM/YYYY'
						onInput={handleChange}
						name='childDOB'
						variant='standard'
						fullWidth
					/>
					<br />
					<br />

					<TextField
						style={{ margin: "5px" }}
						placeholder='Please include any behaviour/anxiety or medical conditions issues your child may have...'
						multiline
						required
						onInput={handleChange}
						name='behaviourNotes'
						rows={3}
						fullWidth
					/>

					<br />

					<TextField
						style={{ margin: "5px" }}
						onInput={handleChange}
						label="Your child's current school"
						name='currentSchool'
						variant='standard'
						fullWidth
					/>
					<br />
					<br />
					<FormControl fullWidth>
						<InputLabel id='attendance-select-label'>
							Current attendance
						</InputLabel>
						<Select
							labelId='attendance-select-label'
							style={{ textAlign: "left" }}
							value={formData.attendance}
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
						onInput={handleChange}
						label='Your full name'
						required
						name='parentFullName'
						variant='standard'
						fullWidth
					/>
					<br />
					<TextField
						style={{ margin: "5px" }}
						onInput={handleChange}
						label='Your email address'
						required
						name='email'
						variant='standard'
						fullWidth
					/>
					<br />
					<TextField
						style={{ margin: "5px" }}
						onInput={handleChange}
						label='Prefered appoinment date'
						name='appointmentDate'
						helperText='DD/MM/YYYY (Leave empty to discuss this at a later date)'
						variant='standard'
						fullWidth
					/>
					<br />
					<br />
					<TextField
						style={{ margin: "5px" }}
						placeholder='Additional notes or questions...'
						name='additionalNotes'
						onInput={handleChange}
						multiline
						rows={3}
						fullWidth
					/>
				</form>
			</CardContent>
			<CardActions>
				<Button
					size='small'
					variant='contained'
					type='submit'
					form='application-form'
				>
					Submit
				</Button>
			</CardActions>
		</Card>
	);
};

export default ApplicationForm;
