import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionStyle from "./SectionStyle";

const SchoolSection = ({
	setResourcesModalOpen,
	setSpacesModalOpen,
	setAnimalsModalOpen,
}) => {
	return (
		<section style={SectionStyle}>
			<Typography variant='h4' gutterBottom>
				Our School
			</Typography>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ maxWidth: 345, margin: "0 auto" }}>
						<CardMedia
							component='img'
							height='190'
							image={require("../../../images/school/children.jpeg")}
							alt='classroom'
						/>
						<CardContent sx={{ minHeight: 135 }}>
							<Typography gutterBottom variant='h5' component='div'>
								Nature Recourses
							</Typography>
							<Typography variant='body2' color='text.secondary' paragraph>
								The Wyre Forest is one of our commonly used local
								resources for outdoor activites
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size='small'
								onClick={() => {
									setResourcesModalOpen(true);
								}}
							>
								More Information
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ maxWidth: 345, margin: "0 auto" }}>
						<CardMedia
							component='img'
							height='190'
							image={require("../../../images/school/individual_classroom.jpeg")}
							alt='classroom'
						/>
						<CardContent sx={{ minHeight: 135 }}>
							<Typography gutterBottom variant='h5' component='div'>
								Individual Spaces
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloribus nam asperiores et esse.
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size='small'
								onClick={() => {
									setSpacesModalOpen(true);
								}}
							>
								More Information
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ maxWidth: 345, margin: "0 auto" }}>
						<CardMedia
							component='img'
							height='190'
							image={require("../../../images/school/Animals.jpeg")}
							alt='classroom'
						/>
						<CardContent sx={{ minHeight: 135 }}>
							<Typography gutterBottom variant='h5' component='div'>
								Support Animals
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloribus nam asperiores et esse.
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size='small'
								onClick={() => {
									setAnimalsModalOpen(true);
								}}
							>
								More Information
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</section>
	);
};

export default SchoolSection;
