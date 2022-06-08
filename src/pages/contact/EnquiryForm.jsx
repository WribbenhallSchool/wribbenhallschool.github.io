import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const EnquiryForm = ({ handleSubmit }) => {
	return (
		<Card>
			<CardContent>
				<Container>
					<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
						Make an Enquiry
					</Typography>
					<TextField
						style={{ margin: "5px" }}
						id='standard-basic'
						label='Your Full Name'
						variant='standard'
						fullWidth
					/>
					<br />
					<TextField
						style={{ margin: "5px" }}
						id='standard-basic'
						label='Your Email'
						variant='standard'
						fullWidth
					/>
					<br />
					<br />

					<TextField
						style={{ margin: "5px" }}
						placeholder='Your message'
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

export default EnquiryForm;
