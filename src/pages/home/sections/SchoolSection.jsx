import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionStyle from "./SectionStyle";

const SchoolSection = () => {
	const cardStyle = {
		maxWidth: 345,
		margin: "0 auto",
		minHeight: 400,
	};

	return (
		<section style={SectionStyle}>
			<Typography variant='h4' gutterBottom>
				Our School
			</Typography>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={4}>
					<Card sx={cardStyle}>
						<CardMedia
							component='img'
							height='190'
							image={require("../../../images/school/children.jpeg")}
							alt='classroom'
						/>
						<CardContent sx={{ minHeight: 135 }}>
							<Typography
								gutterBottom
								variant='h5'
								component='div'
							>
								Nature Resources
							</Typography>
							<Typography
								variant='body2'
								color='text.secondary'
								paragraph
							>
								Natual and open spaces allow the children to
								calm quickily. It supports them in their
								learning of academic subjects. It also allows
								them to develop strategies for social and
								emotional development and to increase their self
								esteem.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={cardStyle}>
						<CardMedia
							component='img'
							height='190'
							image={require("../../../images/school/individual_classroom.jpeg")}
							alt='classroom'
						/>
						<CardContent sx={{ minHeight: 135 }}>
							<Typography
								gutterBottom
								variant='h5'
								component='div'
							>
								Individual Spaces
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Pupils often focus better in a calm and
								individual environment. This reduction in
								sensory stimulation is achieved by ensuring each
								pupil can choose to work in their individual
								learning space. They can also choose to work
								together or alongside each other.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={cardStyle}>
						<CardMedia
							component='img'
							height='190'
							image={require("../../../images/school/Animals.jpeg")}
							alt='classroom'
						/>
						<CardContent sx={{ minHeight: 135 }}>
							<Typography
								gutterBottom
								variant='h5'
								component='div'
							>
								Support Animals
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Daisy the therapy dog is always on hand to
								support children when they are anxious or upset.
								She is a calm and loving influence and an
								excellent listener, who creates a peaceful,
								mindful, atmostphere. Skipper the cat supports
								in quiet moments.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</section>
	);
};

export default SchoolSection;
