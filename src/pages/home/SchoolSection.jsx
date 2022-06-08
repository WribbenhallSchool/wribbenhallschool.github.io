import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const SchoolSection = () => {
	return (
		<section>
			<br />
			<br />
			<Typography variant='h4' gutterBottom>
				Our School
			</Typography>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				spacing={4}
			>
				<Grid item>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							component='img'
							height='190'
							image={require("../../images/school/children.jpeg")}
							alt='classroom'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								Nature Recourses
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								The Wyre Forest is one of our commonly used local
								resources for outdoor activites
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small'>Share</Button>
							<Button size='small'>Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							component='img'
							height='190'
							image={require("../../images/school/living_room.jpg")}
							alt='classroom'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								Individual Spaces
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloribus nam asperiores et esse.
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small'>Share</Button>
							<Button size='small'>Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							component='img'
							height='190'
							image={require("../../images/school/Animals.jpeg")}
							alt='classroom'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								Support Animals
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloribus nam asperiores et esse.
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small'>Share</Button>
							<Button size='small'>Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
			<br />
			<br />
		</section>
	);
};

export default SchoolSection;
